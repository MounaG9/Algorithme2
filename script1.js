VAR
    set1, set2: ARRAY[] OF INTEGER
    sum,i,j: INTEGER
BEGIN
    sum := 0;
    
    FOR i from 0 to length set1-1 DO
        For j from 0 to length set2-1 DO
            While(set1[i]<>set2[j])
            sum:=sum+set1[i];
            END_WHILE
        END_FOR
    END_FOR
    
    FOR j from 0 to length set2-1 DO
        For j from 0 to length set1-1 DO
             While(set2[i]<>set1[j]) DO
             sum:=sum+set2[i];
             END_WHILE
        END_FOR
    END_FOR

    RETURN sum;
END