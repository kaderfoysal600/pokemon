import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect } from 'react';

const PokeMonDetails: NextPage = () => {
    const router = useRouter();

    useEffect(()=>{
        if(router.query.id){
            console.warn(router.query.id);
        }
    },[])

    return <>

    </>
}

export default PokeMonDetails