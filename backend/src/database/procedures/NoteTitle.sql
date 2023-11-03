CREATE PROCEDURE UpdateNoteTitleProcedure
    @ID INT,
    @NewTitle NVARCHAR(MAX)
AS
BEGIN
    UPDATE Notes
    SET Title = @NewTitle
    WHERE ID = @ID;
END
