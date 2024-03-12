"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchBar = ({placeHolder}) => {

  function handleSearch(term){
    console.log(term)
  }

    return (
        <div className="flex gap-2 w-full max-w-sm items-center space-x-2">
      <Input 
      type="email" 
      placeholder={placeHolder}
      onChange={(e)=>{handleSearch(e.target.value)}}
      />
      <Button type="submit">Subscribe</Button>
    </div>
    );
}

export default SearchBar;