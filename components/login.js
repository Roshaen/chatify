import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";

const Login = () =>{
    return(
        <>
        <Head>
            <title>Login</title>
        </Head>
        <div className="flex">
        <ChatIcon color='black'/>
        <h1 className="underline">Chatify</h1>
        </div>
        </>
    )
}

export default Login;