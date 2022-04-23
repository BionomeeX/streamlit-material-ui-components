## **Streamlit Icon Components Based on https://mui.com/material-ui/material-icons/**



✅: Done
🚧: In Progress
❌: Not Started

### **Roadmap**
- Icon Only : ✅
- Button with Icon: 🚧

### **How to use in Streamlit**

``` py

     from streamlit_icon_component import streamlit_icon

    st.header("Basic Icon (medium size)")
    streamlit_icon("alarm_on")

    st.header("Small Icon")
    streamlit_icon("alarm_on", icon_size="small")

    st.header("Large Icon")
    streamlit_icon("alarm_on", icon_size="large")
    
    st.header("Button Icon")
    streamlit_icon("delete_icon", icon_type="button", icon_size="small")

    st.header("Disabled Button Icon")
    streamlit_icon("delete_icon", icon_type="button", disabled=True, icon_size="small")

```
