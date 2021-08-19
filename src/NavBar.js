import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
		const [isOpen, setOpen] = useState(false)
	
		return (
			<div className="container flex items-center py-4 mt-4 sm:mt-12">
					<div className="py-1"><img src="./imgs/logo.svg" width="250" height="250" alt="logo"/></div>
					<ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-accusoft-yellow uppercase text-sm" >
						<li className="group"> <a className="group-hover:text-accusoft-purple border-2 border-dashed border-accusoft-purple border-opacity-0 hover:border-opacity-100" href="#">
							Services &nbsp;<FontAwesomeIcon className="text-accusoft-yellow group-hover:text-accusoft-purple" icon={faChevronDown} /></a>
						</li>
						<li> <a className="hover:text-accusoft-purple border-2 border-dashed border-accusoft-purple border-opacity-0 hover:border-opacity-100" href="#">Pricing</a></li>
						<li><a className="hover:text-accusoft-purple border-2 border-dashed border-accusoft-purple border-opacity-0 hover:border-opacity-100" href="#">Contact</a></li>
					</ul>
					<div className="flex sm:hidden flex-1 justify-end">
						<Hamburger toggled={isOpen} toggle={setOpen} color="white"/>
					</div>
			</div>
		);
	}
	
	export default NavBar;