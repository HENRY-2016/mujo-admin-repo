
neworders_url = "http://192.168.43.140:6060/"
// neworders_url = "http://127.0.0.1:6060/"

vibrateionsseconds = 1000;
reloadsecs = 6000;

function Fetch_Customer_New_Orders ()
{
    Reload_A_Orders_All ();
}

function startvibration()
{
    // Vibrate for 500ms 3 times, pausing for 250ms in between each one.
    navigator.vibrate([500, 250 ,500, 250, 500])
    console.log("vibrating now..")
}

function Reload_Load_staffs () {setInterval(Load_staffs (avenu_type_id) , reloadsecs);}
function Load_staffs (avenu_type_id)
{
    let staff_names_req = new XMLHttpRequest ();
    staff_names_req.open('post' ,neworders_url + 'staff_names',true);
    staff_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText);
            let html_select_input = document.getElementById(avenu_type_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let staff_names = document.getElementById(avenu_type_id);
    staff_names_req.send(staff_names);
}

// =======================================================================
function Reload_A_Orders_All () {setInterval(Fetch_A_Orders_All, reloadsecs);}
function Fetch_A_Orders_All ()
    {
        let req = new XMLHttpRequest();
        req.open('post', neworders_url+'chips_view_temporary_orders',true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length)
                    {
                        // alert("No results found")
                    }
                else
                    {
                        let orders = results.length;
                        document.getElementById("a-status-id").innerText = orders;
                        startvibration()

                        let tbody = document.getElementById('a-tbody');
                        tbody.innerHTML = ' ';

                        // draw table
                        let td,tr;
                        // add table headings
                        let th_names = new Array ();
                        th_names.push(["Number","Name","Avenue","Location", "Contacts","Price","Date","Time"]);
                        let columns_to_count = th_names[0].length;
                        row = tbody.insertRow(-1);
                        for (let looper =0; looper<columns_to_count; ++looper)
                            {
                                let headerNames = document.createElement("th");
                                headerNames.className='js_table_headers'
                                headerNames.innerHTML = th_names[0][looper];
                                row.appendChild(headerNames)
                            }

                        for (let table_row = 0; table_row < results.length; ++table_row)
                            {
                                tr = document.createElement('tr');
                                tr.className='js_table_row';
                                for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                    {
                                        td = document.createElement('td');
                                        td.setAttribute("align", "center");
                                        td.innerHTML = results[table_row][table_data];
                                        tr.appendChild(td)
                                    }
                                    tbody.appendChild(tr)
                            }
                    }
            }
            let div_tag = document.getElementById('chips-view-new-oders-div');
            req.send(div_tag);
    }
