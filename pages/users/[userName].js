import { useRouter } from "next/router"

const DynamicUserName = ()=>{
 const {query} = useRouter()

return( <>this is a {query.userName}</>)
}

export default DynamicUserName