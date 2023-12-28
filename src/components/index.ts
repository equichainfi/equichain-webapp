// COMPONENTS
import CloseModal from "./CloseModal";
import GoBackButton from "./GoBackButton";
import { Icons } from "./Icons";
import Providers from "./Providers";
import SignIn from "./SignIn";
import SignInPoster from "./SignInPoster";
import SignUp from "./SignUp";
import UserAuthForm from "./UserAuthForm";
import CustomFeed from "./feed/CustomFeed";
import GeneralFeed from "./feed/GeneralFeed";
import Post from "./post/Post";
import PostBlockchainDetails from "./post/PostBlockchainDetails";
import PostComments from "./post/PostComments";
import PostDetailsSection from "./post/PostDetailsSection";
import PostFeed from "./post/PostFeed";
import PostHomeFeatures from "./post/PostHomeFeatures";
import PostListings from "./post/PostListings";
import PostOffers from "./post/PostOffers";
import PostPriceHistory from "./post/PostPriceHistory";
import PostPricing from "./post/PostPricing";
import PostItemActivity from "./post/PostItemActivity";
import MoreSimilarListings from "./post/MoreSimilarListings";
import Comment from "./Comment";

// User
import UserMain from "./dashboard/user/UserMain";
import Deals from "./dashboard/user/Deals";
import Created from "./dashboard/user/Created";
import Activity from "./dashboard/user/Activity";
import Collected from "./dashboard/user/Collected";
import Favorites from "./dashboard/user/Favorites";
import OffersMade from "./dashboard/user/OffersMade";
import OffersRecieved from "./dashboard/user/OffersRecieved";
import Content from "./dashboard/user/Content";

// CONSTANTS
import Footer from "./constants/Footer";
import Header from "./constants/Header";
import LeftSidebar from "./constants/LeftSideBar";
import Logo from "./constants/Logo";
import SortViewOptions from "./constants/SortViewOptions";

// UI
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/Accordion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Badge, badgeVariants } from "./ui/Badge";
import { Button } from "./ui/Button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { HoverCard } from "./ui/HoverCard";
import { ScrollArea, ScrollBar } from "./ui/ScrollArea";
import { Separator } from "./ui/Separator";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/Sheet";
import { Skeleton } from "./ui/Skeleton";
import { ToggleGroup, ToggleGroupItem } from "./ui/ToggleGroup";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/Table";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/Tooltip";
import {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
} from "./ui/Command";
import {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from "./ui/Dialog";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/Popover";
import { Input } from "./ui/Input";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from "./ui/Card";
import { Toggle, toggleVariants } from "./ui/Toggle";
import { Checkbox } from "./ui/Checkbox";
import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
} from "./ui/Select";

import { PostMocks } from "../Mocks";

export {
    Content,
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
    SortViewOptions,
    UserMain,
    Deals,
    Created,
    Activity,
    Collected,
    Favorites,
    OffersMade,
    OffersRecieved,
    ToggleGroupItem,
    ToggleGroup,
    PostMocks,
    Checkbox,
    Toggle,
    toggleVariants,
    Card,
    Comment,
    ScrollBar,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
    Input,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Badge,
    Button,
    CloseModal,
    CustomFeed,
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Footer,
    GeneralFeed,
    GoBackButton,
    Header,
    HoverCard,
    Icons,
    LeftSidebar,
    Logo,
    Post,
    PostBlockchainDetails,
    PostComments,
    PostDetailsSection,
    PostFeed,
    PostHomeFeatures,
    PostItemActivity,
    PostListings,
    PostOffers,
    PostPriceHistory,
    PostPricing,
    Providers,
    ScrollArea,
    Separator,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SignIn,
    SignInPoster,
    SignUp,
    Skeleton,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    UserAuthForm,
    badgeVariants,
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
    MoreSimilarListings,
};
