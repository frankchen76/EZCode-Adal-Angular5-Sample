export interface IAllowance{
    // public int Id { get; set; }
    // public string Title { get; set; }
    // public decimal Amount { get; set; }
    // public string User { get; set; }
    // public DateTime? IssueDate { get; set; }
    // public int? AllowanceCategoryId { get; set; }
    // public AllowanceCategory AllowanceCategory { get; set; }
    Id: number;
    Title: string;
    Amount: number;
    User: string;
    IssueDate: Date;
    //category: string;
}