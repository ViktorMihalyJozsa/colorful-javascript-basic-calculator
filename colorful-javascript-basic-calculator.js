/*  Változók inicializálása az aktuális megjelenítés és az eredmény megjelenítési állapot tárolására.
    Initialize variables to store the current display and result display state.  */
    let currentDisplay = "0";   //  Az aktuális megjelenített tartalom. - The current display content.
    let resultDisplay = false;  //  Jelölje meg, hogy nyomon kövesse, hogy megjelenik-e az eredmény? - Flag to track whether the result is displayed.
    
    
    /*  Funkció, amellyel értéket fűz az aktuális kijelzőhöz.
        Function to append a value to the current display.  */
        function appendToDisplay(value) {
            if (currentDisplay === "0" || resultDisplay) {
            //  Ha az aktuális kijelzés "0" vagy az eredmény már megjelenik, cserélje ki az új értékre.
            //  If the current display is "0" or the result is already displayed, replace it with the new value.
                currentDisplay = value;
            } 
            else {
            //  Ellenkező esetben fűzze össze az új értéket az aktuális kijelzővel.
            //  Otherwise, concatenate the new value to the current display.
                currentDisplay += value;
            }
    
            //  Állítsa vissza az eredménymegjelenítési jelzőt false értékre, mivel a felhasználó új értéket írt be.
            //  Reset the result display flag to false, as the user entered a new value.
                resultDisplay = false;
    
            //  Frissítse a számológép képernyőjét az új tartalom megjelenítéséhez.
            //  Update the calculator display to show the new content.
                updateDisplay();
            }
    
    
    /*  Funkció a számológép kijelzőjének frissítésére az aktuális tartalommal.
        Function to update the calculator display with the current content.  */
        function updateDisplay() {
            const displayElement = document.getElementById("display");
            displayElement.textContent = currentDisplay;
        }
    
    
    /*  Az eredmény kiszámítására és megjelenítésére szolgáló funkció.
        Function to calculate and display the result.  */
        function calculateResult() {
            try {
            //  Használja az eval() függvényt a matematikai kifejezés kiértékeléséhez.
            //  Use the eval() function to evaluate the mathematical expression.
                const result = eval(currentDisplay);
    
                //  Az eredmény hozzáfűzése az aktuális megjelenítéshez egyenlőségjel (=) használatával.
                //  Append the result to the current display, preceded by an equal sign (=).
                    currentDisplay += "\n=" + result.toString();
    
                //  Frissítse a számológép kijelzőjét az eredménnyel.
                //  Update the calculator display with the result.
                    updateDisplay();
            } 
            catch (error) {
            //  Ha hiba van a kifejezésben (pl. nullával való osztás), hibaüzenetet jelenít meg.
            //  If there is an error in the expression (e.g., dividing by zero), display an error message.
                currentDisplay += "\nError";
    
            //  Frissítse a számológép képernyőjét a hibaüzenet megjelenítéséhez.
            //  Update the calculator display to show the error message.
                updateDisplay();
            }
    
        //  Az eredménymegjelenítési jelzőt true-ra állítva jelzi, hogy az eredmény megjelenik.
        //  Set the result display flag to true to indicate that the result is displayed.
            resultDisplay = true;
        }
    
    
    /*  Funkció az utolsó elem törlésére az aktuális kijelzőről.
        Function to clear the last element from the current display.  */
        function clearLastElement() {
    
        //  Az utolsó karakter eltávolítása az aktuális képernyőről a slice() metódussal.
        //  Remove the last character from the current display using the slice() method.
            currentDisplay = currentDisplay.slice(0, -1);
    
        //  Ha az aktuális kijelző üres lesz, állítsa vissza "0"-ra.
        //  If the current display becomes empty, set it back to "0".
            if (currentDisplay === "") {
                currentDisplay = "0";
            }
    
            //  Frissítse a számológép képernyőjét, hogy tükrözze a változásokat.
            //  Update the calculator display to reflect the changes.
                updateDisplay();
        }
    
    
    /*  A teljes képernyő törlésére szolgáló funkció.
        Function to clear the entire display.  */
        function clearDisplay() {
            currentDisplay = "0";   //  Állítsa vissza az aktuális kijelzőt "0"-ra. - Reset the current display to "0".
            resultDisplay = false;  //  Állítsa vissza az eredménykijelző jelzőjét false értékre. - Reset the result display flag to false.
    
        //  Frissítse a számológép kijelzőjét, hogy tiszta tartalom jelenjen meg.
        //  Update the calculator display to show the clear content.
            updateDisplay();
        }