import {View, Text, TextInput, TouchableOpacity} from "react-native";
import {Image} from 'expo-image'
import {useEffect, useRef, useState} from "react";
import {useFetch} from "../../hooks/useFetch";
import {API_URL, API_KEY} from "../utils/constants";
import {useAuth} from "../context/AuthContext";

export const Login = ({navigation}) => {
    const {login, isAuth} = useAuth()
    const {data, post, error} = useFetch(API_URL)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isEmailActive, setIsEmailActive] = useState(false)
    const [isPasswordActive, setIsPasswordActive] = useState(false)
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const [errorsLogin, setErrorsLogin] = useState({
        email: '',
        password: ''
    })

    const validateForm = () => {
        let errors = {
            email: '',
            password: ''
        }
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        if (email === '') {
            errors.email = 'El correo electrónico es requerido'
        }else if (!emailRegex.test(email)) {
            errors.email = 'El correo electrónico no es válido'
        }
        if (password === '') {
            errors.password = 'La contraseña es requerida'
        }
        setErrorsLogin(errors)
    }

    const handleSubmit = () => {
        emailRef.current.blur()
        passRef.current.blur()
        validateForm()
        if (errorsLogin.email === '' && errorsLogin.password === '') {
            post(`login?apikey=${API_KEY}`, {
                email: email,
                password: password
            })
        }
    }

    const styles = {
        inputEmail: {
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: errorsLogin.email !== '' ? "#ff4757" : "#121212",
            backgroundColor: '#fff',
        },
        inputPassword: {
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: errorsLogin.password !== '' ? "#ff4757" : "#121212",
            backgroundColor: '#fff',
        },
        inputActive: {
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderStyle: "solid",
            borderWidth: 2,
            borderRadius: 10,
            borderColor: "#9F212F",
            backgroundColor: "#fff",
        },
        labelEmail: {
            position: "absolute",
            top: 16,
            left: 10,
            backgroundColor: "white",
            color: errorsLogin.email !== '' ? "#ff4757" : "#121212",
            fontWeight: "bold",
            fontSize: 12
        },
        labelPassword: {
            position: "absolute",
            top: 16,
            left: 10,
            backgroundColor: "white",
            color: errorsLogin.password !== '' ? "#ff4757" : "#121212",
            fontWeight: "bold",
            fontSize: 12
        },
        inputActiveLabel: {
            position: "absolute",
            top: -8,
            left: 10,
            backgroundColor: "white",
            color: "#9F212F",
            fontWeight: "bold",
            paddingHorizontal: 5,
            fontSize: 10
        },
        inputFilledLabelEmail: {
            position: "absolute",
            top: -8,
            left: 10,
            backgroundColor: "white",
            color: errorsLogin.email ? "#ff4757" : "#121212",
            fontWeight: "bold",
            paddingHorizontal: 5,
            fontSize: 10
        },
        inputFilledLabelPassword: {
            position: "absolute",
            top: -8,
            left: 10,
            backgroundColor: "white",
            color: errorsLogin.password ? "#ff4757" : "#121212",
            fontWeight: "bold",
            paddingHorizontal: 5,
            fontSize: 10
        }
    }

    useEffect(() => {
        if(error?.msg){
            errorsLogin.email = error.msg
            errorsLogin.password = error.msg
        }
    }, [error]);

    useEffect(() => {
        if(data.token){
            login({token: data.token, user: email})
        }
    }, [data]);

    useEffect(() => {
        if(isAuth){
            navigation.navigate('Main')
        }
    }, [isAuth]);

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            paddingHorizontal: 20
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                maxHeight: 100,
                alignItems: 'center',
            }}>
                <Image
                    source={'https://i.ibb.co/FwjLs1f/logo-coffvart.png'}
                    alt="Coffvart"
                    style={{
                        width: 200,
                        height: 200
                    }}/>
            </View>
            <View style={{
                gap: 20,
            }}>
                <View style={{
                    position: "relative"
                }}>
                    <TextInput value={email}
                               onChangeText={setEmail}
                               style={isEmailActive ? styles.inputActive : styles.inputEmail}
                               onFocus={() => setIsEmailActive(true)}
                               onBlur={() => setIsEmailActive(false)}
                               ref={emailRef}
                    />
                    <Text style={email.trim() !== '' ? styles.inputFilledLabelEmail : isEmailActive ? styles.inputActiveLabel : styles.labelEmail} onPress={()=>emailRef.current.focus()}>Correo Electrónico</Text>
                    {
                        errorsLogin.email !== '' && <Text style={{
                            color: "#ff4757",
                            fontSize: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            fontWeight: "bold"
                        }}>{errorsLogin.email}</Text>
                    }
                </View>
                <View style={{
                    position: "relative"
                }}>
                    <TextInput value={password}
                               onChangeText={setPassword}
                               style={isPasswordActive ? styles.inputActive : styles.inputPassword}
                               onFocus={() => setIsPasswordActive(true)}
                               onBlur={() => setIsPasswordActive(false)}
                               textContentType={"password"}
                               secureTextEntry={true}
                               ref={passRef}
                               cursorColor={"#9F212F"}
                    />
                    <Text style={password.trim() !== '' ? styles.inputFilledLabelPassword : isPasswordActive ? styles.inputActiveLabel : styles.labelPassword
                    } onPress={()=>passRef.current.focus()}>Contraseña</Text>
                    {
                        errorsLogin.password !== '' && <Text style={{
                            color: "#ff4757",
                            fontSize: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            fontWeight: "bold"
                        }}>{errorsLogin.password}</Text>
                    }
                </View>
                <TouchableOpacity onPress={handleSubmit}>
                    <View>
                        <Text style={{
                            backgroundColor: "#9F212F",
                            color: "white",
                            textAlign: "center",
                            padding: 10,
                            borderRadius: 10,
                            fontWeight: "bold",
                            fontSize: 15
                        }}>Iniciar Sesión</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}