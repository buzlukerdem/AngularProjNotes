
<div style="text-align: center;">
<img src="/ReadmeImages/ang2.png" alt="Alt Text" style="width:85%; height:auto;" class = "center">
</div>
<br><br>

<p>JavaScript temelli SPA(Single Page Application) oluşturmak için tasarlanmış bir Web Uygulama Geliştirme Mimarisidir.<p>




<h4>SPA Nedir?</h4>
Bir Web Uygulamasının tek bir sayfa ile tüm işlevselliğin yürütüldüğü tasarımdır. Main sayfanın yüklenmesiyle tüm bileşenler tarayıcı üzerine yüklenmektedir. Bu durum sayfa geçişlerinde hız ve performans sağlayacaktır.
<br><br>
Angular CLI yardımcı asistanı yüklenmesi gerekir. Bu cli ile proje oluşturma, yönetme, bileşenlere erişip kullanma, vs. işlemleri sağlayan bir araçtır.
<br><br>
CLI yükleme;

```csharp
npm install -g @angular/cli
```
Geliştirirken Javascript i konsept olarak alan, daha hızlı ve OOP (Object Orianted Programming) den faydalanarak geliştirmeyi sağlayan **TypeScript** kullanılabilir.
Derlendiğinde JavaScript çıktısı verecektir.
<br>
**Angular cli ile temel komutlar;**

* ng version: Angular versiyon bilgisini verir.
* ng new: Yeni temel bir Angular uygulaması oluşturur.
* ng generate: Angular yapı taşlarının üretilmesini sağlar.
* ng serve: Angular uygulamasının ayağa kaldırılmasını sağlar.
* ng build: Angular uygulamasının build edilmesini sağlar.
<br>

Angular Mimarisinin çalışma mantığı MVC tasarımına dayanmaktadır.

<h4>Angular Ana Yapıtaşları</h4>
<br>

* **MODULES**
 Module yapılanması uygulamadaki öğeleri gruplandırarak uygulamanın daha düzenli bir şekilde parça-modül olarak inşa edilebilir kılar. Parçalar bir araya gelerek bütünü oluşturur.
 <br>

 * **COMPONENTS**
Componentler front kısmını ifade eder ve veri modeliyle etkileşim kurarak kullanıcılara görsel kısmı sunan yapılardır.
Html ve TypeScript dosyalarından 2 yapıdadır. Componentlerin veriyle iletişimi çift yönlü **DATA BINDING** özelliği ile sağlanır. İhtiyaç duyulan servislerin instance'larını Dependency Injection ile elde edebilirler.
<br>

* **DATA BINDING**
Veri modeli ile template arasındaki veri akışını dinamik olarak sağlar. Verisel değişiklik olduğunda otomatik olarak sayfalara yansıtılır.
<br>

* **DIRECTIVES**
Html nesnelerin görüntüsünü ve davranışlarını yönetebilmeyi sağlar.
Özel bir etikettir.
<br>

* **DIRECTIVES**

Decarator sayesinde class memberlarına  metadata eklenebilir ve davranışları nitelendirilir.
<br>

* **Services**
Dış servislerle iletişimi kurmaya, karmaşık iş operasyonlarını veya business logic'i yürütme ve componentler arası iletişimi sağlayabilmek için kullanılan yapılanmalardır.
<br>

* **Templates**
Componentlerin HTML kısmıdır. Özel Angular elemanları barındırabilir ve bunları işlevsellik durumuna göre çalıştırabilir.
<br>

* **Guards**
Route erişimlerinin izin kontrolleri Guard yapılanması ile gerçekleştirilir. Kullanıcı erişimine izin verilip verilmeyeceği kararını veren yapılanmadır.

<br>

* **Pipes**
Veriler üzerinde görsel işlemler yapılmasında kullanılır.


<h3>COMPONENTS</h3>

* Sayfalar componentler ile tasarlanır.
* Bir componentin alt componenti olabilir ve partial mantığında geliştirilir.
* Componentler ile sayfalar kullanıcıya sunulur.
* 

