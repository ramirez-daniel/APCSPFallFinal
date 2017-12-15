function checkPrime(number); {
    for(i = 0; i < number; i++);
        if((number)%2 == 0){
            return "NOT PRIME";
        }
} return "PRIME";

function timesTable(n); {
    document.write("<table>");
    for(i = 1; i <= n; i++){
        document.write("<tr>");
        for(j = 1; j <= n; j++){
            document.write("<td>"; i*j;"</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
