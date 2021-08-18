import Hamburger from 'hamburger-react';
import { useState } from 'react';

function NavBar() {
		const [isOpen, setOpen] = useState(false)
	
		return (
			<div className="container flex items-center py-4 mt-4 sm:mt-12">
					<div className="py-1"><img src="./imgs/logo.svg" width="250" height="250" alt="logo"/></div>
					<ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-accusoft-yellow uppercase text-sm" >
						<li className="cursor-pointer">Services</li>
						<li className="cursor-pointer">Pricing</li>  
						<li className="cursor-pointer">Contact</li>
					</ul>
					<div className="flex sm:hidden flex-1 justify-end">
						<Hamburger toggled={isOpen} toggle={setOpen} color="white"/>
					</div>
			</div>
		);
	}
	
	export default NavBar;