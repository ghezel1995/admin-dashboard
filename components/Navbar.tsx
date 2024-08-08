import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
  return (
    <>
      <div className='bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white'>
        <Link href='/' className='text-lg'>
          Mahsa's Dashboard
        </Link>
        <div className='flex items-center'>
          <ThemeToggler />
          <DropdownMenu>
            <DropdownMenuTrigger className='focus:outline-none'>
              <Avatar>
                <AvatarImage
                  src='https://images.unsplash.com/photo-1518288774672-b94e808873ff?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Profile pic'
                />
                <AvatarFallback className='text-black'>MD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/profile'>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/auth'>Login</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
