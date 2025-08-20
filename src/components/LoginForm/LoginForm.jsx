import { useState } from "react";
import { usePasswordVisibility } from "../../hooks/usePasswordVisibility";
import "./LoginForm.css";

export const LoginForm = () => {
	const [form, setForm] = useState({ username: "", password: "" });
	const { isVisible, toggleVisible } = usePasswordVisibility();

	const handleInput = ({ target: { name, value } }) => {
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<form className="login-form">
			<label>
				Username:
				<input type="text" name="username" value={form.username} autoComplete="off" onChange={handleInput} />
			</label>

			<label>
				Password:
				<div className="input-password-button">
					<input
						type={isVisible ? "text" : "password"}
						name="password"
						value={form.password}
						autoComplete="off"
						onChange={handleInput}
					/>
					<button type="button" onClick={toggleVisible}>
						{isVisible ? "🙈" : "👀"}
					</button>
				</div>
			</label>
		</form>
	);
};
