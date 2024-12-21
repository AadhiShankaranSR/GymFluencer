import './App.css';
import { useEffect, useRef, useState } from 'react';
import FAQComponent from './FAQComponent';

function App() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      image: '/Images/pic1.jpg',
      heading: 'Track Your Fitness Journey',
      description: 'Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps and track calories burned. Stay motivated and achieve your goals with our user-friendly interface.'
    },
    {
      image: '/Images/pic2.jpg',
      heading: 'Empowering Startups',
      description: 'Helping startups thrive in a competitive market with tailored strategies.'
    },
    {
      image: '/Images/pic3.jpg',
      heading: 'Teamwork & Collaboration',
      description: 'We believe in the power of collaboration to achieve great results.'
    },
  ];

  const cardItems = [
    {
      image: '/Images/p1.jpg',
      title: 'Effortlessly Workout Logging',
      description: 'Easily log your workouts and monitor your progress over time with our intuitive logging feature. Stay organized and track your fitness journey with precision'
    },
    {
      image: '/Images/p2.jpg',
      title: 'Accurate Rep Counting',
      description: 'Count your reps accurately with our app, ensuring each workout is tracked effectively. Perfect for maintaining consistency and improving your performance.'
    },
    {
      image: '/Images/p3.jpg',
      title: 'Calorie Calculation Made Easy',
      description: 'Calculate calories burned during workouts to help manage your fitness goals. Our app provides precise data to keep you informed and motivated.'
    },
    {
      image: '/Images/p4.png',
      title: 'Personalized Workout Plan',
      description: 'An AI-powered personalized workout plan adapts exercises to your fitness level, goals, and progress, helping you stay motivated and achieve results faster.'
    },
    {
      image: '/Images/p5.jpg',
      title: 'Personalized Diet Plan',
      description: 'An AI-diet plan customizes meals to your health goals, preferences, and lifestyle, offering tailored, nutritious suggestions to support optimal wellness.'
    },
  ];

  const subsections = [
    {
      image: '/Images/getstart.png',
      content: {
        title: 'Step 1: Click on Get Started',
        description: 'Start by opening the GymFluencer. The intuitive home screen gives you quick access to all features'
      }
    },
    {
      image: '/Images/Activity Tracker.png',
      content: {
        title: 'Step 2: Log Your Exercises',
        description: 'Easily log your exercises by selecting from a wide range of activities. Track your progress with detailed logs.'
      }
    },
    {
      image: '/Images/Workout Tracker.png',
      content: {
        title: 'Step 3: Count Your Reps',
        description: 'Count your reps with precision, ensuring every detail is logged. Stay informed on your progress.'
      }
    },
    {
      image: '/Images/Sleep Tracker.png',
      content: {
        title: 'Step 4: Track Your Progress',
        description: 'Review your workout stats and progress over time to stay motivated and reach your fitness goals.'
      }
    },
    {
      image: '/Images/Compare Result 2.png',
      content: {
        title: 'Step 5: Review Your Progress',
        description: 'Check your workout summaries and progress over time to stay motivated and achieve your fitness goals.'
      }
    },
  ];

  const reviews = [
    {
      title: 'Best Fitness App',
      description: 'GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!',
      rating: 5
    },
    {
      title: 'So Easy to Use!',
      description: 'I love how user friendly the app is. Logging workouts has never been easier!',
      rating: 4
    },
    {
      title: 'Incredible Progress Tracker!',
      description: "I've seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!",
      rating: 4
    },
    {
      title: 'Satisfactory',
      description: 'The service was good, but there is room for improvement.',
      rating: 3
    },
    {
      title: 'Amazing Support',
      description: 'The support team was always available and very helpful.',
      rating: 5
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;

          if (entry.isIntersecting) {
            if (element.dataset.type === 'slide-left') {
              console.log('slide-left');
              element.classList.add('slide-in-left');
            } else if (element.dataset.type === 'slide-right') {
              console.log('slide-right');
              element.classList.add('slide-in-right');
            } else if (element.dataset.type === 'flip') {
              element.classList.add('flip-in');
            } else {
              element.classList.add('flip-in');
            }
          } else {
            element.classList.remove('slide-in-left', 'slide-in-right', 'shake', 'flip-in', 'fade-in-bottom-delay');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current.disconnect();
  }, []);


  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header className="header">
        <div className="company-name">
          <h1>GymFluencer</h1>
        </div>
        <div className="nav-links">
          <a href="#home">Features</a>
          <div
            className="about"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <a href="#about">Diet Plan</a>
            {isAboutOpen && (
              <div className="dropdown">
                <a href="#company">Company</a>
                <a href="#team">Team</a>
                <a href="#careers">Careers</a>
              </div>
            )}
          </div>
          <div
            className="services"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <a href="#services">Workout Plans</a>
            {isServicesOpen && (
              <div className="dropdown">
                <a href="#web-development">Web Development</a>
                <a href="#app-development">App Development</a>
                <a href="#seo">SEO Services</a>
              </div>
            )}
          </div>
          <a href="#blog">Blog</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="buttons">
          <button className="btn get-started">Get Started</button>
          <button className="btn login">Login</button>
        </div>
      </header>
      <main>
        <section
          className="carousel"
          style={{
            width: `100%`,
            backgroundImage: `url(${carouselItems[currentIndex].image})`
          }}
        >
          <div className="carousel-content">
            <h2>{carouselItems[currentIndex].heading}</h2>
            <p>{carouselItems[currentIndex].description}</p>
          </div>
        </section>
        <section className="sec-one">
          <div className='sec-div-one'>
            <h3>Discover Our App's Key Features</h3>
          </div>
          <div className='sec-div-two'>
            <p>GymFluencer is your ultimate fitness companion, designed to help you track your workouts with ease.Our application allows to log exercises, count reps, and calculate calories burned, all through a user-friendly interface. Whether you're a beginner or a seasoned athlete, our app will keep you motivated and on track.</p>
          </div>
        </section>
        <section className="card-section">
          <h2 className="section-title">Our Services</h2>
          <div className="card-container">
            {cardItems.map((card, index) => (
              <div key={index} className={`card`}>
                <img src={card.image} alt={card.title} className="card-image" />
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="subsection-section">
          <h2 className="section-title">Our Expertise</h2>
          <div className="subsection-container">
            {subsections.map((sub, index) => (
              <div key={index}
                data-type={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                className="subsection animate">
                {index % 2 === 0 ? (
                  <>
                    <div className={`subsection-image`}>
                      <img src={sub.image} alt={sub.content.title} />
                    </div>
                    <div className="subsection-content">
                      <h3>{sub.content.title}</h3>
                      <p>{sub.content.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="subsection-content">
                      <h3>{sub.content.title}</h3>
                      <p>{sub.content.description}</p>
                    </div>
                    <div className="subsection-image">
                      <img src={sub.image} alt={sub.content.title} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="review-section">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="review-container">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <h3><q>{review.title}</q></h3>
                <p>{review.description}</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < review.rating ? 'filled' : ''}`}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='faqContainer'>
          <h3>FAQ's</h3>
          <FAQComponent />
        </section>
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-center">
            <p>&copy; 2024 My Website</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
