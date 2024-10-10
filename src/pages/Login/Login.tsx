import styles from "./Login.module.css"

const Login = () => {
    return (
        <div className={styles.containerLogin}>
            <h1>Login</h1>
            <form>
                {/* Email */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={''}
                        onChange={() => { }} />
                </div>
                {/* Password */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={''}
                        onChange={() => { }} />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login