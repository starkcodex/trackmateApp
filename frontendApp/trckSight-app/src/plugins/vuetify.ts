import 'vuetify/styles'; // Import Vuetify styles
import { createVuetify } from 'vuetify'; // Import createVuetify from Vuetify 3

// Import Vuetify components (explicitly import components you're using)
import { 
  VApp, 
  VBtn, 
  VContainer, 
  VRow, 
  VCol, 
  VImg, 
  VAppBar, 
  VToolbar, 
  VToolbarTitle, 
  VSpacer, 
  VFooter,        
  VMain,          
  VCarousel,      
  VCarouselItem,  
  VCard,          // Add VCard component
  VCardTitle,     // Add VCardTitle component
  VTextField,     // Add VTextField component
  VForm,           // Add VForm component
  VMenu,           // Add VMenu component
  VList,           // Add VList component
  VListItem,       // Add VListItem component
  VListItemTitle,  // Add VListItemTitle component
  VIcon            // Add VIcon component
} from 'vuetify/components';

// Create Vuetify instance with explicit components registration
const vuetify = createVuetify({
  components: {
    VApp,
    VBtn,
    VContainer,
    VRow,
    VCol,
    VImg,
    VAppBar,
    VToolbar,
    VToolbarTitle,
    VSpacer,
    VFooter,        
    VMain,          
    VCarousel,      
    VCarouselItem,  
    VCard,          
    VCardTitle,     
    VTextField,     
    VForm,          
    VMenu,          
    VList,          
    VListItem,      
    VListItemTitle, 
    VIcon           
  }
});

export default vuetify;
