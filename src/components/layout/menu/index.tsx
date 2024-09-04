import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill, BsGearFill } from "react-icons/bs";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger
} from "@/components/ui/menubar"

function Menu() {
    return (
        <Menubar className="flex items-center justify-center p-2 w-10 h-10 bg-[--base] border-0">
            <MenubarMenu>
                <MenubarTrigger className="p-0 w-full h-full focus:bg-transparent data-[state=open]:bg-accent[data-state=open] bg-transparent">
                    <CgMenu className="text-[--text] w-full h-full"/>
                </MenubarTrigger>
                <MenubarContent className="bg-yellow-300 w-screen rounded-none mt-5 border-none text-[--text] ">
                    <Link to="/" title="Voltar a home">
                        <MenubarItem className="p-3 bg-[--base] h-12">
                            Home
                            <MenubarShortcut>
                                <AiFillHome className="text-[--text]"/>
                            </MenubarShortcut>
                        </MenubarItem>
                    </Link>
                    <MenubarSeparator />
                    <Link to="/sobre" title="Veja mais sobre mim">
                        <MenubarItem className="p-3 bg-[--base] h-12">
                            Sobre Mim
                            <MenubarShortcut>
                                <BsFillPersonFill className="text-[--text]"/>
                            </MenubarShortcut>
                        </MenubarItem>
                    </Link>
                    <MenubarSeparator />
                    <Link to="/servicos" title="Meus Projetos">
                        <MenubarItem className="p-3 bg-[--base] h-12">
                            Projetos
                            <MenubarShortcut>
                                <BsGearFill className="text-[--text]"/>
                            </MenubarShortcut>
                        </MenubarItem>
                    </Link>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}

export default Menu;