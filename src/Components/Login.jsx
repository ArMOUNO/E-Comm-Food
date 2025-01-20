'use client';
import { useState } from 'react';
import {
    Button,
    Label,
    Input,
    InputIcon,
    Alert,

    Modal,
    ModalAction,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalTitle,
} from 'keep-react';
import { Envelope, Lock } from 'phosphor-react';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate()
    const handleEmail = (data) => {
        setEmail(data);
    };

    const handlePass = (data) => {
        setPass(data);
    };

    const handleSubmite = () => {
        if (email === "mouno" && pass === "mouno") {
            localStorage.setItem("user", JSON.stringify({ email, pass }));
            navigate("/")
            Swal.fire({
                title: "Login Successful!",
                text: "Welcome back!",
                icon: "success",
                confirmButtonText: "OK",
                confirmButtonColor: "#3085d6",
            });
        } else {
            // Error alert
            Swal.fire({
                title: "Login Failed!",
                text: "Email or Password does not match.",
                icon: "error",
                confirmButtonText: "Try Again",
                confirmButtonColor: "#d33",
            });
        }
    };

    return (
        <section className='flex justify-center  rounded-md '>
            <div className="flex  relative md:w-[60%] w-[90%] items-center rounded-md overflow-hidden m-5 shadow-2xl shadow-red-400 bg-gray-100">
                <div className=''>
                    <img className='lg:h-[800px] h-[500px] w-[100%]  ' src="/src/assets/LoginPage.png" alt="" />
                </div>
                <div className=" absolute bg-white md:bg-opacity-30 bg-opacity-80  md:left-[5%] lg:left-[50%] shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold  text-center mb-6 text-red-800">Login</h2>
                    <form className="space-y-6">
                        <fieldset className="space-y-4">
                            <Label htmlFor="email" className="text-lg font-semibold text-gray-700">
                                Email
                            </Label>
                            <div className="relative">
                                <Input
                                    onChange={(e) => handleEmail(e.target.value)}
                                    id="email"
                                    placeholder="Enter email"
                                    className="ps-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <InputIcon>
                                    <Envelope size={20} color="#AFBACA" />
                                </InputIcon>
                            </div>
                        </fieldset>

                        <fieldset className="space-y-4">
                            <Label htmlFor="password" className="text-lg font-semibold text-gray-700">
                                Password
                            </Label>
                            <div className="relative">
                                <Input
                                    onChange={(e) => handlePass(e.target.value)}
                                    id="password"
                                    placeholder="Enter password"
                                    type="password"
                                    className="ps-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <InputIcon>
                                    <Lock size={20} color="#AFBACA" />
                                </InputIcon>
                            </div>
                        </fieldset>

                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                handleSubmite();
                            }}
                            size="sm"
                            color="danger"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition-all"
                        >
                            Sign In
                        </Button>
                    </form>
                    <div className="text-center text-sm text-gray-500 mt-6">
                        <p>
                            Don't have an account?{" "}
                            <span >
                              
                                <Modal>
                                    <ModalAction asChild>
                                        <p className="text-red-600 font-semibold cursor-pointer hover:underline"> Sign Up</p>
                                    </ModalAction>
                                    <ModalContent className="max-w-[20rem] lg:max-w-[26rem]">
                                        <img src="/src/assets/opps.png" alt="" />
                                        <p className='text-red-600 text-lg font-bold text-center'>Oops <span className='text-green-600'>Sorry</span> you can't register now!</p>
                                        
                                        <ModalFooter className="justify-center">
                                         
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </span>
                        </p>
                    </div>
                    {alert && (
                        <Alert
                            type={alert.type}
                            className={`mt-4 ${alert.type === "success" ? "bg-green-500" : "bg-red-500"
                                } text-white text-center py-2 rounded-lg`}
                        >
                            {alert.message}
                        </Alert>
                    )}
                </div>
            </div>
        </section>
    );
};
