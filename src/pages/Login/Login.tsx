import { useNavigate } from "react-router-dom";
import AppBar from "../../components/AppBar/appbar";
import google from "../../assets/google.svg";
import Footer from "../../components/Footer/Footer";

function Login() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    
    if(token){
        navigate('/');
    }
    if(!token){
      navigate('/login');
    }

    const handleGoogleLogin = () => {
        window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://rech-in-box-ai-nandesh-assignment-main.vercel.app/";
    };

    return (
        <div>
            <AppBar />
            <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
                <div className="h-[312px] bg-[#111214] text-center p-8 rounded-lg border border-[#343A40]">
                    <div>
                        <div className="text-lg font-semibold">Create a new account</div>
                        <div
                            className="mt-6 border border-white/40 p-2 px-20 text-sm flex items-center text-gray-400 rounded-lg cursor-pointer"
                            onClick={handleGoogleLogin}>
                            <img className="w-4 mr-3" src={google} alt="google" />
                            Sign Up with Google
                        </div>
                    </div>
                    <div className="mt-10">
                        <div onClick={handleGoogleLogin}
                            className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] my-5 mx-16 py-3 px-6 text-sm rounded-lg cursor-pointer text-white">
                            Create an Account
                        </div>
                        <div className="flex justify-center gap-1 text-gray-500 my-8">
                            Already have an account?{" "}
                            <div className="text-gray-400 cursor-pointer" onClick={handleGoogleLogin}>
                                Sign In
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
