function checkPrime(n); {

}

function timesTable(number); {
    document.write("<table>");
    for(i = 1; i <= number; i++){
        document.write("<tr>");
        for(j = 1; j <= number; j++){
            document.write("<td>"; i*j;"</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
