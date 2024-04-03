import { ConnectEmbed, useAddress, useShowConnectEmbed } from "@thirdweb-dev/react";
import {useRouter} from "next/router";
import {useEffect} from "react";



const loginOptional = false;

const Login = () => {
    const showConnectEmbed = useShowConnectEmbed();
    const address = useAddress();
    const router = useRouter();

    useEffect(() => {
        if(address){
            router.push("/");

        }
    }, [address, router]);
    



    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
        }}>
            <h1>Login</h1>
            {showConnectEmbed ? ( 
                <ConnectEmbed
                 auth={{
                    loginOptional,
                    onLogin(){
                        console.log("Logged in!");
                    },
                    onLogout(){
                        console.log("Logged out!");
                    }
                  }}
                />
            ): (
                <p>Singing in...</p>
            )}

        </div>
    )
};

export default Login;