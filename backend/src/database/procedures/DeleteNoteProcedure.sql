CREATE PROCEDURE DeleteNoteProcedure
    @ID INT
AS
BEGIN
    DELETE FROM Notes
    WHERE ID = @ID;
END
