using Microsoft.EntityFrameworkCore;
using PatisserieDuCoeur.Models;

namespace PatisserieDuCoeur.Data
{
    public class PatisserieDbContext : DbContext
    {
        public PatisserieDbContext(DbContextOptions<PatisserieDbContext> options) : base(options) { }

        public DbSet<ContactMessage> ContactMessages { get; set; }
    }
}
