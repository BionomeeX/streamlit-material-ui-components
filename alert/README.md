## **Streamlit Alert Components Based on https://mui.com/material-ui/react-alert/**



✅: Done
🚧: In Progress
❌: Not Started

### **Roadmap**
- Basic alerts: ✅
- Description: ✅
- Actions: ❌
- Icons: ❌
- Variants (Outlined, Filled): ✅
- Snackers: 🚧

### **Issues**
- Snackers Position can't be changed


## **Basic Alerts**
``` py

from streamlit_alert_component import streamlit_alert

streamlit_alert("This is an error alert — check it out!", "error")
streamlit_alert("This is a warning alert — check it out!", "warning")
streamlit_alert("This is an info alert — check it out!", "info")
streamlit_alert("This is a success alert — check it out!", "success")
```
![alt text](../.assets/alert/basic_alerts.png)  



## **Description Alerts**
``` py 
streamlit_alert("This is an error alert — check it out!", "error", "Error Title")
```
![alt text](../.assets/alert/description_alerts.png)  


## **Variants Alerts**
``` py
streamlit_alert("This is an error alert — check it out!", "error", "Error Title", variant="outlined")

streamlit_alert("This is an error alert — check it out!", "error", variant="filled")
```
![alt text](../.assets/alert/variants_alerts.png)  

## **Snackbars Alerts**
``` py
streamlit_alert("This is an error alert — check it out!", "error", "Error Title", variant="outlined", snackbar=True)

streamlit_alert("This is an error alert — check it out!", "error", variant="filled", snackbar=True)
```