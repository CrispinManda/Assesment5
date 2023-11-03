CREATE PROCEDURE GetNoteByTitleProcedure
    @Title NVARCHAR(MAX)
AS
BEGIN
    SELECT * FROM Notes
    WHERE Title = @Title;
END
