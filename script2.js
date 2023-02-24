Algorithme Dot product
Var
Ps:integer
Begin 
PROCEDURE dot_product(v1, v2: ARRAY[] OF REAL; VAR ps: REAL);
ps := 0.0;
FOR i := 0 TO LENGTH(v1) - 1 DO
    ps := ps + v1[i] * v2[i];
END_FOR
END_PROCEDURE

FOR j := 1 TO n DO
READLN v1;
READLN v2;

dot_product(v1, v2, ps);

IF ps = 0.0 THEN
    WRITELN "The vectors are orthogonal.";
ELSE
    WRITELN "The vectors are not orthogonal.";
END_IF
END_FOR

FUNCTION dot_product(v1, v2: ARRAY[] OF REAL): REAL;
VAR
    ps: REAL;
BEGIN
    ps := 0.0;
    FOR i := 0 TO LENGTH(v1) - 1 DO
        ps := ps + v1[i] * v2[i];
    END_FOR
    RETURN ps;
END
END
