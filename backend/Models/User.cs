namespace UserApi.Models;

public class User
{
    public long id { get; set; }
    public string? firstName { get; set; }
    public string? lastName { get; set; }
    public string? email { get; set; }
    public string? password { get; set; }
}