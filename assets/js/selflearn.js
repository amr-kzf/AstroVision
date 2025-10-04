const lectures = [
  {
    title: "Lecture 1: Exoplanets",
    content: `
      <h1>Introduction to Discovering Exoplanets</h1>
      <h2>Learning Objective:</h2>
      <p class="float-left">To understand why finding exoplanets is difficult and to introduce the main methods used,
       focusing on the Transit Method.</p>
      <img src="/assets/img/l-1.1.jpg" alt="Exoplanets" class="lecture-img-large float-right border-radius">
      <div class="clearfix"></div>
      <h3>1- What are Exoplanets?</h3>
      <p class="float-left">Exoplanets are planets that orbit a star outside of our Solar System.
        The search for exoplanets is the search for new worlds, possibly habitable ones.</p>
      <img src="/assets/img/l-1.2.jpg" alt="Exoplanets" class="lecture-img-2 float-right border-radius">
      <div class="clearfix"></div>
      <h3>Looking for Indirect Signs!</h3>
      <p>Solution: Look for Indirect Effects Since we cannot see the planet directly, we look for changes in the star’s behavior caused by the planet's gravity or orbit. The planet leaves a "signature" on its star.</p>
      <h3>2- The Challenge of Finding Them</h3>
      <p>The Challenge: Why Can't We See Them?<br> 1. Distance: They are incredibly far away.<br> 2. Brightness: They are tiny and dark compared to their stars.
       <br>>The star’s light completely overwhelms the faint light reflected by the planet.</p>
      <h3>Two Key Detection Methods:</h3>
      <img src="/assets/img/l-1.3.png" alt="Exoplanets" class="lecture-img-full border-radius  ">
      <h3>The Transit Method</h3>
      <p>The Concept: If the planet’s orbit is aligned with our view, it briefly blocks a fraction of the starlight. <br>Why it Matters for Data Science: <br>1. Data Source: This method produces "Light Curves"—perfect time-series data for analysis
      <br>2. Model Training: This data is essential for training Machine Learning models to automatically identify exoplanets in vast amounts of telescope observations</p>
      <img src="/assets/img/l-1.4.png" alt="Exoplanets" class="lecture-img-large border-radius">
      <h3>Next Lesson → </h3> <p> We will dive deep into the Light Curve in Lesson 2! 🚀<b>.....</b></p>
      <button class="start-quiz-btn">Start Quiz</button>
    `,
    quiz: [
  {q:"1. What are exoplanets?",o:["A) Planets that orbit the Sun directly","B) Planets that orbit the moons of other planets","C) Planets that orbit a star outside our solar system","D) Planets found only in the Milky Way galaxy"],a:2},
  {q:"2. What is the main challenge in observing exoplanets directly?",o:["A) Difficulty of sending spacecraft to them","B) Their great distance and the brightness of their stars","C) Their inability to reflect light at all","D) Their very high orbital speed"],a:1},
  {q:"3. What does the Radial Velocity (Doppler) Method detect to find exoplanets?",o:["A) A drop in the star’s temperature","B) A slight wobble in the motion of the star","C) An increase in the planet’s rotation speed","D) A change in the planet’s color"],a:1},
  {q:"4. What can we mainly learn from the Transit Method?",o:["A) The planet’s mass","B) The planet’s radius and size","C) The planet’s age","D) The distance between the planet and the galaxy"],a:1},
  {q:"5. Why is data from the Transit Method important in data science?",o:["A) Because it provides direct images of planets","B) Because it doesn’t require advanced telescopes","C) Because it produces light curves analyzed as time series, useful for training AI models","D) Because it measures the planets’ temperatures accurately"],a:2}
    ]
  },
  {
    title: "Lecture 2: Light Curve",
    content: `
      <h1>What is a Light Curve?</h1>
      <h2>Learning Objective:</h2>
      <p>1. Learn what a light curve is and why it’s important in astronomy.<br>
       2. See how the curve’s shape tells us when a planet passes in front of a star.
      </p>
      <h3>What is a Light Curve?</h3> 
      <p>A light curve is like a star’s “story in a graph.”
      It shows how the brightness of a star changes over time.
      <br>•	If the star is calm, the curve is almost a straight line.
      <br>•	If something happens (like a planet crossing in front of the star), the curve shows a dip.
      </p>
      <h3>How does a transit look?</h3>
      <p>When a planet moves in front of the star:
      <br>•	The curve goes<b> down suddenly </b>(the star looks dimmer).
      <br>•	It stays<b> flat at the bottom </b>while the planet is blocking the star.
      <br>•	Then the curve goes<b> back up quickly </b>when the planet moves away.
      <br>This makes a shape like a<b> “U” </b>or a little<b> bowl</b>, and that’s the signal that a planet is there.</p>
      <img src="/assets/img/l-2.1.png" alt="Exoplanets" class="border-radius">
      <h3>Think of it like this:</h3>
      <p>Imagine a bright lamp. If you move a small coin in front of it for a moment, the lamp looks a little dimmer. The light curve is just the graph that shows this small change.
      <br>In this picture:
      <br>•	The star = the lamp.
      <br>•	The planet = the coin.
      </p>
      <img src="/assets/img/l-2.2.jpg" alt="Exoplanets" class="border-radius">
      <h3>Next Lesson → </h3> <p> Transit: the moment when planets reveal their secrets! 🚀<b>.....</b></p>
      <button class="start-quiz-btn">Start Quiz</button>
    `,
    quiz: [
  {q:"1. What is a light curve in astronomy?",o:["A) A diagram showing the orbit of a planet","B) A graph of how a star’s brightness changes over time","C) A map of star locations in the sky","D) A chart of stellar temperatures"],a:1},
  {q:"2. If a star is stable, what does its light curve look like?",o:["A) A sharp dip followed by a rise","B) A nearly straight line","C) A series of repeating “U”-shapes","D) A zigzag pattern"],a:1},
  {q:"3. What happens to the light curve when a planet transits its star?",o:["A) The curve shows a constant increase in brightness","B) The curve remains completely flat","C) The curve shows a sudden, temporary dip in brightness","D) The curve becomes irregular with random spikes"],a:2},
  {q:"4. Which feature best describes the shape of a transit signal in a light curve?",o:["A) A triangle","B) An inverted “U” or a dish-like shape","C) A straight line","D) A wave-like oscillation"],a:1},
  {q:"5. What is the analogy used to explain a transit in the lesson?",o:["A) A flashlight turning on and off","B) A coin passing in front of a lamp","C) A shadow cast by a mountain","D) A mirror reflecting sunlight"],a:1}
    ]
  },
  {
    title: "Lecture 3: Tranist The Planet's Hidden Signature",
    content: `
      <h1>What is a Transit and How Do We Use It?</h1>
      <h2>Learning Objective:</h2>
      <p>1. Understand what a transit is in astronomy.
      <br>2. Learn how transits help us discover and study planets.</p>
      <h3>What is a Transit (Astronomical Transit)?</h3> 
      <p>A<b> transit </b>happens when a smaller object (like a planet) passes in front of a larger one (like a star).
      From Earth, it looks like a tiny dark spot moving across the star’s face.
      <br><b>•	Example in our Solar System: </b> Mercury or Venus passing in front of the Sun when they line up with Earth and the Sun.
      <img src="assets/img/l-3.1.png" alt="Exoplanets" class="border-radius">
      <h3>Why is Transit Important?</h3>
      <p>Transits are one of the most powerful tools in modern astronomy. They help scientists to:
      <br>•<b>	Discover exoplanets:</b> When a planet crosses in front of its star, the star looks a little dimmer. Measuring this dip confirms the presence of a planet.
      <br>•	<b>Measure planet size & orbit:</b> The depth of the dip tells us how big the planet is, and the duration & repetition of the dip reveal its orbit and distance from the star.
      <br>•	<b>Study atmospheres: </b>During transit, some starlight passes through the planet’s atmosphere. By analyzing this light, scientists can detect gases like water vapor or methane — clues to whether the planet could be habitable.
      <br>•	<b>Historical importance: </b>In the 18th and 19th centuries, observing Venus transits helped astronomers calculate the distance between Earth and the Sun (the Astronomical Unit).
      <img src="/assets/img/l-3.2.jpg" alt="Exoplanets" class="border-radius">
      <img src="/assets/img/l-3.3.jpg" alt="Exoplanets" class="border-radius">
      <h3>Analogy:</h3>
      <p>Imagine a big lamp and you move a small coin across it. The lamp looks slightly dimmer while the coin is in front. That’s exactly what happens during a transit!</p>
      <h3>Next Lesson → </h3> <p>From Dips to Details: How Light Curves Reveal a Planet’s Size, Orbit, and Path! 🚀<b>.....</b></p>
      <button class="start-quiz-btn">Start Quiz</button>
    `,
    quiz: [
  {q:"1. What is an astronomical transit?",o:["a) A planet orbiting its star","b) A small celestial body passing in front of a larger one as seen by an observer","c) The rotation of a star around its axis","d) The movement of Earth around the Sun"],a:1},
  {q:"2. Which planets in our solar system can be seen transiting the Sun from Earth?",o:["a) Mars and Jupiter","b) Mercury and Venus","c) Saturn and Uranus","d) Earth and Neptune"],a:1},
  {q:"3. How do scientists detect exoplanets using the transit method?",o:["a) By listening to radio signals from stars","b) By observing the color changes of stars","c) By measuring the small decrease in a star’s brightness when a planet passes in front of it","d) By calculating the speed of the star’s rotation"],a:2},
  {q:"4. What can be determined from the duration and repetition of a transit?",o:["a) The age of the star","b) The orbit and distance of the planet from its star","c) The chemical composition of the planet’s core","d) The number of moons the planet has"],a:1},
  {q:"5. In the 18th and 19th centuries, why was the transit of Venus important for astronomers?",o:["a) To calculate the size of Venus","b) To measure the distance between Earth and the Sun (astronomical unit)","c) To study the atmosphere of Venus","d) To discover new exoplanets"],a:1}
    ]
  },
  {
    title: "Lecture 4: Measuring Planet Properties from a Light Curve",
    content: `
      <h1>Measuring Planet Properties from a Light Curve</h1>
      <h2>Learning Objective:</h2>
      <p>1. Understand how the three main measurements from a light curve (Depth, Period, Duration) reveal the discovered planet’s properties.<br>
       2. Learn what each property means and how it relates to orbit and size.
      </p>
      <h3>1. How Do We “Draw” a Planet?</h3> 
      <p>A light curve is not just proof of a planet’s existence — it is also a precise measuring tool.
      By analyzing<b> three key dimensions of</b> the curve, astronomers can build a complete picture of the exoplanet:
      <b><br>•	Depth
      <br>•	Period
      <br>•	Duration</b>
      </p>
      <h3>2. First Property: Planet Size (Depth)</h3>
      <p><b>• Definition: </b>The depth is the amount of decrease in the star’s brightness.
      <br><b>•	Meaning: </b>It shows the planet’s size compared to the star.
      <br><b>•	Rule: </b>The larger the planet, the more light it blocks → the deeper the dip.
      <br><b>•	Conclusion: </b>Measuring depth helps determine the planet’s radius (its size).
      <br><b>•	Analogy:</b> If a small tennis ball passes in front of the Sun, the brightness drop is tiny. If a giant like Jupiter crosses, the dip is much bigger.
      </p>

      <h3>3. Second Property: Planet’s Year (Period)</h3>
      <p><b>• Definition: </b>The period is the time between two successive transits of the same planet.
      <br><b>•	Meaning: </b>This period is the planet’s orbital year — how long it takes to complete one orbit around its star
      <br><b>•	Rule: </b>Shorter period → closer orbit. Longer period → farther orbit.
      <br><b>•	Conclusion: </b>Measuring the period helps determine how far the planet is from its star and how long its year is.
      <br><b>•	Analogy:</b> Like a racetrack — a car on the inner circle comes back quickly (short period), while a car on the outer circle takes longer (long period).
      </p>

      <h3>4. Third Property: Orbit Inclination (Duration)</h3>
      <p><b>• Definition: </b>Duration is the total time the planet takes to pass in front of the star (from start of dip to end).
      <br><b>•	Meaning: </b>It relates to the planet’s speed and the tilt of its orbit during transit.
      <br><b>•	Rule: </b>Shorter duration may mean the planet passed quickly or only across the edge of the star, while longer duration could mean a slower orbit or a central crossing.
      <br><b>•	Conclusion: </b>Duration helps astronomers model the orbit’s geometry and confirm data accuracy.
      <br><b>•	Analogy:</b> A car passing straight across your field of view takes longer (long duration). A car speeding across just the edge takes less time (short duration).
      </p>
      <img src="/assets/img/l-4.1.jpg" alt="Exoplanets" class="border-radius">
      <h3>📝 Properties at a Glance</h3>
      <div class="form">
      <table border="2"> 
    <tr>
        <th>Property</th>
        <th>Concept</th>
        <th>What it tell us</th>
        <th>Analogy</th>
    </tr>
    <tr>
        <th>Depth</th>
        <th>How much the star’s light drops</th>
        <th>Planet size (How big?)</th>
        <th>Small race car = tiny dip vs big truck = deep dip</th>
    </tr>
    <tr>
    <th>Period</th>
        <th>Time between two dips</th>
        <th>Distance from star / planet’s year (Where does it orbit?)</th>
        <th>Car on inner track = quick; outer track = slow</th>
    </tr>
    <tr>
    <th>Duration</th>
    <th>Total crossing time</th>
        <th>Orbit tilt & speed (How does it cross?)</th>
        <th>Car crossing the middle = long; edge = short</th>
    </tr>
</table>
        </div>
      <h3>5. Real Examples (Kepler Planets)</h3>
      <img src="assets/img/l-4.2.jpg" alt="Exoplanets" class="border-radius">
      <p><b>•	Kepler-4b:</b> Shows a shallow dip → small planet size.
      <br><b>•	Kepler-4b & 6b:</b> Both have very short orbital periods (~3.2 days) → very close to their stars.
      <br><b>•	Kepler-5b & 8b:</b> Show deeper dips → larger planets, blocking more starlight.
      <br><b>•	Kepler-7b: </b>Longer period (4.9 days) → farther orbit than the others.
      <br><b>Observation:</b>Most light curves have similar widths → meaning these planets have comparable orbital speeds or transit paths.
      </p>
      <img src="/assets/img/l-4.3.jpg" alt="Exoplanets" class="border-radius">
      <img src="/assets/img/l-4.4.jpg" alt="Exoplanets" class="border-radius">
      <h3>✨ Conclusion:</h3>
      <p>
      Depth = planet size 🌍
      <br>Period = orbit distance & year 🪐
      <br>Duration = orbit tilt & speed 🚀
      <br>Together, they allow astronomers to “draw” a planet from just a dip in light.
      </p>
      <h3>Next Lesson → </h3> <p> Transit: the moment when planets reveal their secrets! 🚀<b>.....</b></p>
      <button class="start-quiz-btn">Start Quiz</button>
    `,
    quiz: [
  {q:"1. What does the depth of a light curve tell us about a planet?",o:["a) Its orbital speed","b) Its size compared to its star","c) The tilt of its orbit","d) The distance of the star from Earth"],a:1},
  {q:"2. The period of a light curve represents:",o:["a) The time it takes the planet to rotate once on its axis","b) The length of the planet’s year (its orbital period)","c) The brightness of the star","d) The number of moons the planet has"],a:1},
  {q:"3. A shorter orbital period usually means that the planet:",o:["a) Orbits closer to its star","b) Orbits farther from its star","c) Is larger in size","d) Has a tilted orbit"],a:0},
  {q:"4. What does the duration of a transit describe?",o:["a) The age of the star","b) The total time the planet takes to pass in front of the star","c) The distance between two stars","d) The temperature of the planet"],a:1},
  {q:"5. Why do astronomers analyze the depth, period, and duration of a light curve?",o:["a) To calculate the chemical composition of the star","b) To determine key properties of the planet, such as size, orbit, and inclination","c) To measure the rotation speed of the galaxy","d) To find the number of other stars nearby"],a:1}
    ]
  }
];

// State
let currentLecture = 0;
let currentQuizQ = 0;
let quizScore = 0;

// Elements
const sidebarItems = document.querySelectorAll('.selflearn-sidebar li');
const lectureContent = document.getElementById('lecture-content');
const lectureQuiz = document.getElementById('lecture-quiz');

// Render lecture
function showLecture(idx) {
  currentLecture = idx;
  currentQuizQ = 0;
  quizScore = 0;
  // Sidebar highlight
  sidebarItems.forEach((li,i)=>{
    li.classList.toggle('active', i===idx);
  });
  // Show content
  lectureQuiz.style.display = "none";
  lectureContent.style.display = "block";
  lectureContent.innerHTML = lectures[idx].content;
  // Add quiz button event
  const quizBtn = lectureContent.querySelector('.start-quiz-btn');
  if(quizBtn) quizBtn.onclick = ()=>showQuiz(0);
}

// Render quiz
function showQuiz(qIdx) {
  lectureContent.style.display = "none";
  lectureQuiz.style.display = "block";
  const quiz = lectures[currentLecture].quiz;
  if(qIdx >= quiz.length) {
    // Quiz finished
    sidebarItems[currentLecture].classList.add('completed');
    // Move to next lecture if exists
    if(currentLecture < lectures.length-1) {
      setTimeout(()=>{
        showLecture(currentLecture+1);
        sidebarItems[currentLecture].scrollIntoView({behavior:"smooth",block:"center"});
      }, 1200);
      lectureQuiz.innerHTML = `<div class="quiz-question">Quiz Finished!<br>Score: ${quizScore}/${quiz.length}</div>
        <button class="quiz-next-btn" disabled>Moving to next lecture...</button>`;
    } else {
      lectureQuiz.innerHTML = `<div class="quiz-question">All lectures completed!<br>Final Score: ${quizScore}/${quiz.length*lectures.length}</div>`;
    }
    return;
  }
  // Render question
  const q = quiz[qIdx];
  lectureQuiz.innerHTML = `
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">
      ${q.o.map((opt,i)=>`<div class="quiz-option" data-idx="${i}">${opt}</div>`).join('')}
    </div>
    <button class="quiz-next-btn" style="display:none;">Next</button>
  `;
  // Option click
  const opts = lectureQuiz.querySelectorAll('.quiz-option');
  let answered = false;
  opts.forEach(opt=>{
    opt.onclick = ()=>{
      if(answered) return;
      answered = true;
      const idx = +opt.dataset.idx;
      opts.forEach(o=>o.style.pointerEvents = 'none'); // Disable all after one click
      if(idx === q.a) {
        opt.classList.add('quiz-correct');
        quizScore++;
      } else {
        opt.classList.add('quiz-wrong');
        opts[q.a].classList.add('quiz-correct');
        opt.classList.add('selected');
      }
      opt.classList.add('selected');
      lectureQuiz.querySelector('.quiz-next-btn').style.display = "inline-block";
    };
  });
  // Next button
  lectureQuiz.querySelector('.quiz-next-btn').onclick = ()=>showQuiz(qIdx+1);
}

// Sidebar click
sidebarItems.forEach((li,i)=>{
  li.onclick = ()=>showLecture(i);
});

// Start with first lecture

showLecture(0);
