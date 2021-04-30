import { useState } from "react";

import classes from "./profile-form.module.css";

function ProfileForm() {
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    async function onSubmitHandler(e) {
        e.preventDefault();
        const response = await (
            await fetch("/api/user/change-password", {
                method: "PATCH",
                body: JSON.stringify({
                    newPassword,
                    oldPassword,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        ).json();

    
    }
    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input
                    type="password"
                    id="new-password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </div>
            <div className={classes.control}>
                <label htmlFor="old-password">Old Password</label>
                <input
                    type="password"
                    id="old-password"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                />
            </div>
            <div className={classes.action}>
                <button type="submit">Change Password</button>
            </div>
        </form>
    );
}

export default ProfileForm;
