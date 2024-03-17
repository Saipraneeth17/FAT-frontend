import React from 'react';
import styles from '../../css/BookingDetails.module.css';

const FeedbackForm = ({ onSubmit }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('your-rating-db-endpoint-url', { rating, comment });

            if (response.status === 200) {
                handleFeedbackSubmit({ rating, comment }); // Update feedback state in parent component
                console.log('Feedback submitted successfully');
            } else {
                console.error('Error submitting feedback:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <form className={styles.feedbackForm} onSubmit={handleSubmit}>
            <h2>Provide Feedback</h2>
            <div className={styles.rating}>
                <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5"></label>
                <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4"></label>
                <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3"></label>
                <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2"></label>
                <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1"></label>
            </div>
            <label htmlFor="comment">Comment:</label>
            <textarea id="comment" name="comment" rows="4" cols="50" className={styles.comment}></textarea>
            <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
    );
}

export default FeedbackForm;
