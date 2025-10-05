import streamlit as st
import numpy as np
import streamlit as st
import pandas as pd
import joblib
import tensorflow as tf
from tensorflow import keras

#from tensorflow.keras.models import load_model

st.set_page_config(page_title="AstroVision", layout="wide")

# navbar(active_page="Model")  

st.markdown(
    """
    <h1 style='text-align: center;'>Models</h1>
    <hr style='border: 2px solid black; width: 50%; margin: auto;'>
    """,
    unsafe_allow_html=True
)

# st.title("Models")
st.markdown("##  Try Our Models")

# ==============================
# صفحة Model الأساسية
# ==============================
st.markdown("####  Select Model : ")

# ==============================
# Tabs
# ==============================
tab1, tab2 = st.tabs([" Kepler Model", "LightCurve Model"])

# ==============================
# Tab 1: Kepler Model
# ==============================
with tab1:

    # ==============================
    # تحميل موديل Kepler
    # ==============================
    @st.cache_resource
    def load_kepler_model():
        saved_data = joblib.load("models/final_catboost_model_for_kepler.pkl")
        model = saved_data["model"]
        threshold = saved_data["threshold"]
        metrics = {
            "Accuracy": 96,
            "Recall": 97,
            "F1 Score": 96,
            "Precision": 96,
            "AUC": 0.995
        }
        return model, threshold , metrics

    model, threshold , metrics = load_kepler_model()

    # ==============================
    # دالة التنبؤ
    # ==============================
    def predict_custom(X_new):
        y_probs = model.predict_proba(X_new)[:, 1]
        return ["Planet" if p >= threshold else "Not Planet" for p in y_probs]

    # ==============================
    # Tab Kepler
    # ==============================
    st.header("Kepler Model")
    kepler_file = st.file_uploader("Kepler Data (CSV)", type="csv", key="kepler_file")

    if kepler_file:
        try:
            kepler_data = pd.read_csv(kepler_file)
            st.write("Preview:")
            st.dataframe(kepler_data)

            
            if st.button("Predict - Kepler", key="predict_kepler"):
                st.markdown("###  Model Prediction")
                predictions = predict_custom(kepler_data)
                
                # إنشاء DataFrame للنتائج فقط
                result_df = pd.DataFrame({
                    "Prediction": predictions
                })

                # تنسيق الجدول وجعله في منتصف الصفحة
                st.markdown(
                    """
                    <style>
                    .center-table {
                        margin-left: auto;
                        margin-right: auto;
                        width: 50%;
                        text-align: center;
                    }
                    </style>
                    """,
                    unsafe_allow_html=True
                )
                st.markdown(result_df.to_html(classes="center-table"), unsafe_allow_html=True)

                # ======== عرض قياسات الموديل ========
                st.markdown("###  Model Metrics")
                # ======== تعديل جدول القياسات ========
                metrics_df = pd.DataFrame(list(metrics.items()), columns=["Metric", "Value"])

                # تحويل القيم للأرقام المئوية مع % ما عدا AUC
                def format_metric(row):
                    if row["Metric"] != "AUC":
                        return f"{row['Value']}%"
                    else:
                        return row["Value"]

                metrics_df["Value"] = metrics_df.apply(format_metric, axis=1)

                st.markdown(metrics_df.to_html(classes="center-table", index=False), unsafe_allow_html=True)


   
        except Exception as e:
            st.error(f"حدث خطأ: {e}")


# ==============================
# Tab 2: LightCurve Model
# ==============================
with tab2:
    # st.header("LightCurve Model")
    # ==============================
    # تحميل موديل LightCurve
    # ==============================
    @st.cache_resource
    def load_lightcurve_model():
        model = keras.models.load_model('models/best_model_lightcurve.h5', compile=False)

        # هنا ممكن تضيف أي قياسات جاهزة لو عندك
        metrics = {
            "Accuracy": 99,
            "Recall": 100,
            "F1 Score": 90,
            "Precision": 83,

        }
        return model, metrics

    lc_model, lc_metrics = load_lightcurve_model()

    # ==============================
    # دالة تجهيز البيانات للموديل
    # ==============================
    def prepare_for_model(df, drop_columns=None):
        if drop_columns:
            df = df.drop(columns=drop_columns)
        X = df.values.astype(np.float32)
        X = np.expand_dims(X, axis=2)  # [batch_size, 3197, 1]
        return X

    # ==============================
    # دالة التنبؤ
    # ==============================
    def predict_lightcurve(df):
        X = prepare_for_model(df)
        y_pred = lc_model.predict(X)
        y_pred = (y_pred > 0.5).astype("int32")
        # تحويل النتائج لنصوص
        return ["NOt PLANET" if p == 1 else "PLANET" for p in y_pred.flatten()]

    # ==============================
    # Tab LightCurve
    # ==============================
    # ==============================
    # Tab 2: LightCurve Model
    # ==============================
    with tab2:
        st.header("LightCurve Model")
        lc_file = st.file_uploader("Light Curve Data (CSV)", type="csv", key="lc_file")

        if lc_file:
            try:
                lc_data = pd.read_csv(lc_file)
                st.write("Preview :")
                st.dataframe(lc_data)

                # ==============================
                # دالة رسم Light Curve مع dips
                # ==============================
                import plotly.graph_objects as go
                from scipy.signal import find_peaks

                def plot_light_curve_with_dips_plotly(flux_row):
                    flux = np.array(flux_row).flatten()
                    time = np.arange(len(flux))
                    peaks, _ = find_peaks(-flux, height=0)

                    fig = go.Figure()
                    fig.add_trace(go.Scatter(x=time, y=flux, mode='lines', name='Flux'))
                    fig.add_trace(go.Scatter(x=peaks, y=flux[peaks], mode='markers',
                                            marker=dict(color='red', size=10),
                                            name='Detected Transit'))

                    fig.update_layout(title="Light Curve with Detected Transits",
                                    xaxis_title="Time",
                                    yaxis_title="Flux",
                                    template='plotly_white')
                    return fig, peaks

                # ==============================
                # ==============================
                # زر التنبؤ
                # ==============================
                if "lc_predictions" not in st.session_state:
                    st.session_state.lc_predictions = None

                if "lc_metrics_df" not in st.session_state:
                    st.session_state.lc_metrics_df = None

                if st.button("Predict - LightCurve", key="predict_lc"):
                    st.session_state.lc_predictions = predict_lightcurve(lc_data)
                    
                    # حفظ النتائج في DataFrame
                    st.session_state.lc_result_df = pd.DataFrame({"Prediction": st.session_state.lc_predictions})

                    # جدول القياسات
                    metrics_df = pd.DataFrame(list(lc_metrics.items()), columns=["Metric", "Value"])
                    def format_metric(row):
                        if row["Metric"] != "AUC":
                            return f"{row['Value']}%"
                        else:
                            return row["Value"]
                    metrics_df["Value"] = metrics_df.apply(format_metric, axis=1)
                    st.session_state.lc_metrics_df = metrics_df

                # عرض النتائج لو موجودة في Session State
                # عرض النتائج لو موجودة في Session State
                if st.session_state.lc_predictions is not None:
                    st.markdown("###  Model Prediction")
                    st.markdown(
                        """
                        <style>
                        .center-table {
                            margin-left: auto;
                            margin-right: auto;
                            width: 50%;
                            text-align: center;
                        }
                        </style>
                        """,
                        unsafe_allow_html=True
                    )
                    st.markdown(
                        st.session_state.lc_result_df.to_html(classes="center-table", index=True),
                        unsafe_allow_html=True
                    )

                    st.markdown("###  Model Metrics")
                    st.markdown(
                        """
                        <style>
                        .center-table {
                            margin-left: auto;
                            margin-right: auto;
                            width: 50%;
                            text-align: center;
                        }
                        </style>
                        """,
                        unsafe_allow_html=True
                    )
                    st.markdown(
                        st.session_state.lc_metrics_df.to_html(classes="center-table", index=False),
                        unsafe_allow_html=True
                    )



                # ==============================
                # زر رسم LightCurve
                # ==============================
                if st.button("Draw LightCurve", key="draw_lc"):
                    st.markdown("###  LightCurve Plot")
                    for i, row in lc_data.iterrows():
                        fig, peaks = plot_light_curve_with_dips_plotly(row)
                        st.plotly_chart(fig, use_container_width=True)


            except Exception as e:
                st.error(f"حدث خطأ: {e}")


