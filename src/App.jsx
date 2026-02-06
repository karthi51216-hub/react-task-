

import { useState } from "react";
import "./App.css";

import SidebarMenu from "./components/SidebarMenu"
import MultiAccordion from"./components/MultiAccordion"
import GridListToggle from "./components/GridListToggle"
import Tooltip from "./components/Tooltip"
import AddToList from "./components/AddToList"
import Dropdown from "./components/Dropdown"
import DropdownGroup from "./components/DropdownGroup"
import Modal from "./components/Modal"
import Tabs from "./components/Tabs";
import BackToTop from "./components/BackToTop";
import EditList from "./components/EditList";
import EmptyListMessage from "./components/EmptyListMessage";
import SortList from "./components/SortList";
import FilterList from "./components/FilterList";
import ToggleSort from "./components/ToggleSort";
import ResetList from "./components/ResetList";
import MultiSelectList from "./components/MultiSelectList";
import SelectedCount from "./components/SelectedCount"
import ClearSelections from "./components/ClearSelections";
import SingleStateForm from "./components/SingleStateForm"
import InlineErrorForm from "./components/InlineErrorForm";
import RequiredValidationForm from "./components/RequiredValidationForm";
import DisableSubmitForm from "./components/DisableSubmitForm";
import PasswordToggle from "./components/PasswordToggle";
import PasswordStrength from "./components/PasswordStrength";
import FormWithCard from "./components/FormWithCard";
import CardsList from "./components/CardsList";
import DeletedCard from "./components/DeletedCard";
import HighlightCard from "./components/HighlightCard";
import LocalStorageExample from "./components/LocalStorageExample";
import RetrieveLocalStorage from "./components/RetrieveLocalStorage";
import SyncWithLocalStorage from "./components/SyncWithLocalStorage"
import ListSearchFilter from "./components/ListSearchFilter";
import SidebarWithReset from "./components/SidebarWithReset";
import LoadingSpinner from "./components/LoadingSpinner";
import Popup from "./components/Popup";
import Stepper from "./components/Stepper";
import StepIndicator from "./components/StepIndicator";
import TabsSwitch from "./components/TabsSwitch";
import UnderlineTabs from "./components/UnderllineTabs";
import DisableAfterSubmit from "./components/DisableAfterSubmit";
import SuccessMessageForm from "./components/SucessMessageForm";
import PasswordIconToggle from "./components/PasswordIconToggle";
import HelperText from "./components/HelperText";

import ItemList from "./components/ItemList";
import ContentLoader from "./components/ContentLoader";
import NoResultsList from "./components/NoResultList";
import CategoryButtons from "./components/CategoryButtons"
import CardCount from "./components/CardCount";
import SelectedCard from "./components/SelectedCard";
import HoverCard from "./components/HoverCard"
import OverlayModal from "./components/OverlyModal";
import DropdownArrow from "./components/DropDownArrow";
import SimpleDropdown from "./components/SimpleDropdown";
import IconTooltip from "./components/IconTooltip";
import AutoHideNotification from "./components/AutoHideNotification";
import NotificationBanner from "./components/NotificationBanner";
import ToggleHeader from "./components/ToggleHeader";
import Submenu from "./components/Submenu";
import SidebarActive from "./components/SidebarActive";
import CollapsibleSidebar from "./components/CollapsibleSidebar";









function App() {
    const [open, setOpen] = useState(false);
     const [show, setShow] = useState(false);
  return (
    <>
     {/* <div className="App">
      <h1>Vite + React</h1>
       </div> */}

<div>
  <SidebarMenu/>
</div>

<div>
  <MultiAccordion/>
</div>

<div>
  <GridListToggle/>
</div>


<div>
  <Tooltip/>
</div>


<div>
  <AddToList/>
</div>

<div>

  <Dropdown/>
</div>


<div>

  <DropdownGroup/>
</div>


 <div style={{ padding: "40px" }}>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && <Modal onClose={() => setOpen(false)} />}
    </div>

<div>
  <Tabs/>
</div>

<div>

<BackToTop/>
</div>


<div>
  <EditList/>
</div>


<div>
  <EmptyListMessage/>
</div>


<div>
  <SortList/>
</div>


<div>

  <FilterList/>
</div>


<div>
<ToggleSort/>
</div>


<div>

<ResetList/>
</div>


<div>
  <MultiSelectList/>
</div>



<div>
  <SelectedCount/>
</div>

<div>
  <ClearSelections/>
</div>

<div>
  <SingleStateForm/>
</div>

<div>

  <InlineErrorForm/>
</div>


<div>

  <RequiredValidationForm/>
</div>


<div>

  <DisableSubmitForm/>
</div>


<div>

  <PasswordToggle/>
</div>


<div>
  <PasswordStrength/>
</div>


<div>
  <FormWithCard/>
</div>

<div>
<CardsList/>

</div>


<div>
  <DeletedCard/>
</div>


<div>
  <HighlightCard/>
</div>


<div>

  <LocalStorageExample/>
</div>



<div>
  < RetrieveLocalStorage/>
</div>

<div>
  <SyncWithLocalStorage/>
</div>


<div>
  <ListSearchFilter/>
</div>

<div>
  <SidebarWithReset/>
</div>


<div>
<LoadingSpinner/>
</div>

  <div style={{ padding: "40px" }}>
      <button onClick={() => setShow(true)}>Open Popup</button>

      {show && <Popup onClose={() => setShow(false)} />}
    </div>


<div>
  <Stepper/>
</div>


<div>
  <StepIndicator/>
</div>

<div>
<TabsSwitch/>
</div>

<div>
  <UnderlineTabs/>
</div>


<div>
  <DisableAfterSubmit/>
</div>

<div>

  <SuccessMessageForm/>
</div>

<div>
  <PasswordIconToggle/>
</div>


<div>

  <HelperText/>
</div>



<div>
  <ItemList/>
</div>

<div>

  <ContentLoader/>
</div>

<div>
  <NoResultsList/>
</div>


<div>
  <CategoryButtons/>
</div>


<div>
  <CardCount/>
</div>


<div>

  <SelectedCard/>
</div>

<div>
  <HoverCard/>
</div>

 <div style={{ padding: "40px" }}>
      <button onClick={() => setOpen(true)}>Open Overlay</button>

      {open && <OverlayModal onClose={() => setOpen(false)} />}

      <p>
        Try clicking or scrolling background — it won’t work while overlay is open.
      </p>
    </div>
<div>

<DropdownArrow/>
</div>

<div>
  <SimpleDropdown/>
</div>

<div>
  <IconTooltip/>
</div>

<div>

 < AutoHideNotification/>
</div>


<div>

  <NotificationBanner/>
</div>


<div>
  <ToggleHeader/>
</div>


<div>
  <SidebarActive/>
</div>

<div>

  <CollapsibleSidebar/>
</div>


    </>
  );
}

export default App;
