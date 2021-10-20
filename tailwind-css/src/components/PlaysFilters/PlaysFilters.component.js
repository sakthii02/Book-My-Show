import { Disclosure } from '@headlessui/react'
import {BiChevronDown,BiChevronUp} from 'react-icons/bi'
const PlaysFilter=(props)=> {
  return (
    <Disclosure>
        {({ open }) =>(
            <>
                <Disclosure.Button className="flex items-center gap-3">
                    {open ? <BiChevronUp />: <BiChevronDown />}
                    <span className={open ?"text-red-700":"text-gray-700"}>{props.title}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500">
                    <div className="flex flex-wrap items-center gap-3 text-red-700 mt-3">
                            {
                                props.tags.map((tag)=>(
                                    <>
                                    <div className="border-2 border-gray-200 p-2">
                                    <span className="text-sm">{tag}</span>
                                    </div>
                                    </>
                                )    
                                )
                            }
                    </div>
                </Disclosure.Panel>
            </>
        )}
      
    </Disclosure>
  )
}

export default PlaysFilter;