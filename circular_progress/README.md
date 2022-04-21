## **Streamlit Circular Progress Components Based on https://mui.com/material-ui/react-progress/**



✅: Done
🚧: In Progress
❌: Not Started

### **Roadmap**
- Circular indeterminate : ✅
- Circular color: ❌
- Circular determinate: ✅
- Circular with label: ✅
- Interactive integration: ❌

### **How to use in Streamlit**

``` py
    from streamlit_circular_progress_component import streamlit_circular_progress
    
    st.header("Indeterminate Progress")
    streamlit_circular_progress()

    st.header("Determinate Progress")
    streamlit_circular_progress(15)

    st.header("Circular with label")
    streamlit_circular_progress(39, True)
```
