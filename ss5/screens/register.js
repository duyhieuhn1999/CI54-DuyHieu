const style= ` 
.register-container {
    width:100vw;
    height:100vh;
    background: url('https://ict-imgs.vgcloud.vn/2020/11/10/08/ca-4-mau-iphone-12-se-duoc-ban-chinh-hang-tu-ngay-27-11.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
}
#register-form{
    width:30%;
    background: #fff;
    height:100vh;
}
h1{
    text-align: center;
    color: #333;
}
`

class RegisterScreen extends HTMLElement {
    constructor() {
        super()

        this._shadowRoot = this.attachShadow({mode : 'open'})
    }
    connectedCallback(){
        
        this._shadowRoot.innerHTML = ` 
        <style>
        ${style}
        </style>
        <div class="register-container">
            <form id="register-form">
                <h1>CI Project </h1>
                <input-wrapper id="first-name" type="text" placeholder="First Name"></input-wrapper>
                <input-wrapper id="last-name" type="text" placeholder="Last Name"></input-wrapper> 
                <input-wrapper id="email" type="text" placeholder="Email"></input-wrapper> 
                <input-wrapper  id="password" type="password" placeholder="Pass"></input-wrapper> 
                <input-wrapper  id="confrim-passwrod" type="password" placeholder="Confirm password"></input-wrapper> 
                <button>Register</button>
            </form>
        </div>
        `
        const registerForm = this._shadowRoot.getElementById('register-form')
        registerForm.addEventListener('submit', (e) => { 
            e.preventDefault()
            const firstName = this._shadowRoot.getElementById('first-name').value
            const lastName =this._shadowRoot.getElementById('last-name').value
            const email =this._shadowRoot.getElementById('email').value
            const password =this._shadowRoot.getElementById('password').value
            
            addDocument()
            function addDocument(){
                const data = {
                    name : `${firstName +" " + lastName}`,
                    email : `${email}`,
                    password : `${password}`
                }
                firebase.firestore().collection('users').add(data)
            }
            
        })
    }
    
}
window.customElements.define('register-screen',RegisterScreen)