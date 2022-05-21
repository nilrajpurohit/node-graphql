import { useSubscription,gql } from "@apollo/client";

const GET_MESSAGES = gql`
subscription{
    messages{
        id
        content
        user 
    }
}
`;

export const POST_MESSAGE = gql`
mutation ($user:String!,$content:String!) {
    postMessage(user:$user,content:$content)
}
`;

export const Messages = ({user}) =>{
    const {data} = useSubscription(GET_MESSAGES);
    if (!data){
        return null;
    }
    return(
        <>
            {data.messages.map(({id,user:messageUser,content})=>(
                <div style={{display:"flex",justifyContent:user === messageUser ? "flex-end" : "flex-start",
                            paddingBottom:"1em",marginTop:"10px"}}>
                                
                   {user !== messageUser && (
                    <div
                        style={{
                            height:50,
                            width:30,
                            marginRight:"0.5em",
                            fontWeight:"700",
                            // textAlign:"center",
                            fontSize:"18px",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}
                    >
                        {messageUser.slice(0,2).toUpperCase()}
                    </div>
                   )}

                    <div style={{background:user === messageUser ? "#58bf56" : "#e5e6ea",
                                color:user === messageUser ? "white" : "black",
                                padding:"1em",
                                borderRadius:"0.3em",
                                maxWidth:"60%",
                                fontWeight:"700"}}>

                            {content}  
                    </div>
                </div>
            ))}
        </>
    );
    // return JSON.stringify(data);
}
