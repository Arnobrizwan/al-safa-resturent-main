import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_utils/GlobalApi";
import foodList from "./_components/BusinessList";


export default function Home() {

 
  return (
    <div>
        <CategoryList/>

        <foodList/>
        {/* <BusinessList/> */}

    </div>
  );
}