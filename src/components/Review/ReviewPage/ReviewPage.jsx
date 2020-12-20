import React, { useContext, useEffect, useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Redirect, useHistory } from 'react-router-dom';
import { AppContext } from '../../../contexts/AppContext';
import {
	setError,
	setFieldValue,
	setIsDirty,
	setIsFormValid,
} from '../../../actions/actions';
import { checkEmailValidity } from '../../../utils/checkEmailValidity';

import styles from './ReviewPage.module.css';

function ReviewPage() {
	const {
		state: {
			films: {
				filmInfo,
			},
			review: {
				username, usernameError, usernameIsDirty,
				email, emailError, emailIsDirty,
				review, reviewError, reviewIsDirty,
				isFormValid,
			},
		},
		dispatch,
	} = useContext(AppContext);
	const [isSending, setIsSending] = useState(false);
	const history = useHistory();

	useEffect(() => {
		dispatch(setIsFormValid(
			!(usernameError || emailError || reviewError) &&
			usernameIsDirty && emailIsDirty && reviewIsDirty
		))
	}, [
		usernameError,
		emailError,
		reviewError,
		usernameIsDirty,
		emailIsDirty,
		reviewIsDirty,
	])

	if (!filmInfo) {
		return (<Redirect to="/" />);
	}

	const changeHandler = (field, value) => {
		let error = '';

		if (!value.trim()) {
			error = `${field} can not be empty`;
			return dispatch(setFieldValue({ field, value, error }));
		}

		if (field === 'email' && !checkEmailValidity(value)) {
			error = 'email is incorrect';
		}

		dispatch(setFieldValue({ field, value, error }));
	}

	const sendForm = async (e) => {
		e.preventDefault();

		setIsSending(true);
		try {
			await new Promise((resolve) => { setTimeout(resolve, 1000) });
			history.push('/congrats');
		} catch (error) {
			dispatch(setError(error.message || 'Something went wrong'))
			setIsSending(false);
		}
	}

	const isUsernameInvalid = usernameIsDirty && usernameError;
	const isEmailInvalid = emailIsDirty && emailError;
	const isReviewInvalid = reviewIsDirty && reviewError;

	return (
		<Grid item xs={12} md={6}>
			<form className={styles.reviewForm} onSubmit={sendForm}>
				<TextField required
					variant="outlined"
					className={styles.field}
					label="username"
					helperText={isUsernameInvalid ? usernameError : ""}
					error={Boolean(isUsernameInvalid)}
					value={username}
					onChange={(e) => changeHandler('username', e.target.value)}
					onBlur={() => dispatch(setIsDirty('username'))}
				/>
				<TextField required
					variant="outlined"
					className={styles.field}
					label="email"
					helperText={isEmailInvalid ? emailError : ""}
					error={Boolean(isEmailInvalid)}
					value={email}
					onChange={(e) => changeHandler('email', e.target.value)}
					onBlur={() => dispatch(setIsDirty('email'))}
				/>
				<TextField
					required
					variant="outlined"
					className={styles.fieldReview}
					label="review"
					multiline
					helperText={isReviewInvalid ? reviewError : ""}
					error={Boolean(isReviewInvalid)}
					rows={4}
					value={review}
					onChange={(e) => changeHandler('review', e.target.value)}
					onBlur={() => dispatch(setIsDirty('review'))}
				/>
				<Button type="submit"
					variant="contained"
					color="primary"
					className={styles.sendBtn}
					disabled={!isFormValid || isSending}
				>
					{`Send${isSending ? 'ing...' : ''}`}
				</Button>
			</form>
		</Grid>
	);
}

export default ReviewPage;