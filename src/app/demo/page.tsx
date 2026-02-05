"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DemoPage(){

    const [loading, setLoading] = useState(false);
    const [loadingB, setLoadingB] = useState(false);
    const handleBlocking = async () =>{
        setLoading(true);
        await fetch("/api/demo/blocking", {method: "POST"});
        setLoading(false);
    };
    const handleBackground = async() =>{
        setLoadingB(true);
        await fetch("/api/demo/background", {method: "POST"});
        setLoadingB(false);
    }

    return (
        <div className="flex justify-center items-center p-8 space-x-4">
            <Button disabled = {loading} onClick={handleBlocking}>
                {loading? "Loading...": "Blocking"}
            </Button>
            <Button disabled = {loadingB} onClick={handleBackground}>
                {loading? "Loading...": "Background"}
            </Button>
        </div>
    )
}