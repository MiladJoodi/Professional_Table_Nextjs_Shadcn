"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

const SearchBar = ({placeHolder}) => {

  const searchParams = useSearchParams();

  const pathname = usePathname();
  const {replace} = useRouter()


  const handleSearch = useDebouncedCallback((term)=> {
    const params = new URLSearchParams(searchParams);
    
    if(term){
      params.set('query', term)
    }else{
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  },2000)

    return (
        <div className="flex gap-2 w-full max-w-sm items-center space-x-2">
      <Input 
      type="email" 
      placeholder={placeHolder}
      onChange={(e)=>{handleSearch(e.target.value)}}
      defaultValue={searchParams.get('query')?.toString()}
      />
      <Button type="submit">Subscribe</Button>
    </div>
    );
}

export default SearchBar;