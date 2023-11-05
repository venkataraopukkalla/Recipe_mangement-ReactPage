import "./login.css"

export default function Login(){
    return <div className="login-container">
      <div className="loginpage">
      <div className="login-title">Login</div>

      <div className="login-form">
            <form>
            <label>
                <input placeholder="Enter Username" type="text"/>
            </label>
            <label>
                <input placeholder="Enter password" type="text"/>
            </label>
             <button>Submit</button>
            </form>
      </div>

      </div>

    </div>
}