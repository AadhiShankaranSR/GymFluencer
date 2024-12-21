import React, { useState } from 'react';

const FAQComponent = () => {

    const ArrowDown = '/Images/ArrowDown.svg';
    const ArrowUp = '/Images/ArrowUp.svg';

    const faqListItems = [
        {
            id: 1,
            question: "How do I log my workouts?",
            answer: "You can log your workouts by clicking the 'Log Workout' button on the home page. From there, you can enter the details of your workout, including the type of exercise, duration, and intensity."
        },
        {
            id: 2,
            question: "Can I track my calories burned?",
            answer: "Yes, you can track your calories burned by logging your workouts in the application. We offer a variety of workout tracking features to help you monitor your progress."
        },
        {
            id: 3,
            question: "Is this application suitable for beginners?",
            answer: "Our application is suitable for users of all fitness levels, including beginners. We offer a variety of workout plans that cater to different fitness levels."
        },
        {
            id: 4,
            question: "What features does the application offer?",
            answer: "Our application offers a variety of features, including workout tracking, calorie counting, and personalized workout plans."
        },
        {
            id: 5,
            question: "How can I reset my password?",
            answer: "You can reset your password by clicking the 'Forgot Password' link on the login page."
        },
        {
            id: 5,
            question: "How can I contact customer support?",
            answer: "You can contact our customer support team by emailing support@example.com or by calling our hotline at 1-800-123-4567."
        }
    ];


    let staticIndex = 1;
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <ul className='faqList'>
            {faqListItems.map((item) => {
                const currentIndex = staticIndex;
                staticIndex++;

                return (
                    <li className={expandedIndex === currentIndex ? 'expanded' : ''} key={item.id}>
                        <div className="faqQPart" onClick={() => toggleFAQ(currentIndex)}>
                            <div className="faqIndex">{currentIndex}</div>
                            <div className="faqQuestion">
                                <strong>{item.question}</strong>
                            </div>
                            <div className="faqIcon">
                                <img
                                    src={expandedIndex === currentIndex ? ArrowUp : ArrowDown}
                                    width={30}
                                    height={30}
                                    alt="toggle"
                                />
                            </div>
                        </div>
                        {expandedIndex === currentIndex && (
                            <div className="faqAPart">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default FAQComponent;
