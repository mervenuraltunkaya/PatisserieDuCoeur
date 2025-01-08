using Microsoft.AspNetCore.Mvc;
using PatisserieDuCoeur.Models; // ContactMessage modelinin bulunduğu yer
using PatisserieDuCoeur.Data;

namespace PatisserieDuCoeur.Controllers
{
    public class ContactController : Controller
    {
        private readonly PatisserieDbContext _context;

        public ContactController(PatisserieDbContext context)
        {
            _context = context;
        }

        // GET: /Contact
        [HttpGet]
        public IActionResult Index()  
        {
            return View("~/Views/Home/Index.cshtml"); 
        }

        // POST: /Contact/Submit
        [HttpPost]
        public IActionResult Submit(ContactMessage contactMessage)
        {
            if (ModelState.IsValid)
            {
                _context.ContactMessages.Add(contactMessage);
                _context.SaveChanges();
                // Form başarılı bir şekilde gönderildiğinde mesaj ekleyin
                TempData["SuccessMessage"] = "Mesajınız başarıyla gönderildi!";
                return RedirectToAction("Index");  // Aynı sayfada kalır
            }
            return View( contactMessage);  // Eğer hata varsa, aynı sayfada gösterir
        }
    }
}
