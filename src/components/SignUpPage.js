import React,{useState} from 'react';
import './SignupPage.css';
import axios from 'axios';

function SignUpPage() {

    const [fullName,setFullName]=useState("");
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const fullNameChanged=(ev)=>{
        setFullName(ev.target.value);
    }

    const userNameChanged=(ev)=>{
        setUserName(ev.target.value);
    }

    const emailChanged=(ev)=>{
        setEmail(ev.target.value);
    }

    const passwordChanged=(ev)=>{
        setPassword(ev.target.value);
    }

    const signUpButtonClicked=()=>{
        //alert(fullName.trim()+' '+userName.trim()+' '+email.trim()+' '+password);
        axios.post('http://localhost:4000/app/signup',{
            fullName:fullName,
            userName:userName,
            email:email,
            password:password,
        }).then((data)=>{
            alert('successfully registered');
            console.log(data);
        })

        setFullName('');
        setUserName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <section>
                <div className="main">
                    <h1>Sign Up</h1>
                    <div className="one">
                        <input type="text" placeholder="Full Name *" required value={fullName} onChange={fullNameChanged} />
                    </div>
                    <div className="two">
                        <input type="text" placeholder="Username *" required value={userName} onChange={userNameChanged}/>
                    </div>
                    <div className="three"><input type="email" placeholder="E-mail *" required value={email} onChange={emailChanged}/></div>
                    <div className="four"><input type="password" placeholder="Password *" required value={password} onChange={passwordChanged}/></div>
                    <div className="btn"><button type="submit" onClick={signUpButtonClicked} >Sign Up</button></div>
                    <hr />
                </div>
            </section>
        </div>
    )
}

export default SignUpPage;

