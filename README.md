
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
* Iç içe componentler birbirinden bağımsız çalışır parça bütün ilişkisini sağlar.
* Componentler birbiryleriyle iletişim kurabilir.

<br>

**Template**

* Component'in görsel çalışmaları template parçasında yapılır.
* Component'in **app.component.html** dosyası template kısmıdır.
* **templateUrl** field'ı ile ilişkilendirme gerçekleştirilir.
* İçerisinde html kodu ile directive - pipe - databinding elemanlarını kullanabilmektedir.
* TemplateUrl yerine template field'ı üzerinden görsel çalışmalar ts dosyasında gerçekleştirilebilir.

<br>

**Style**
* Component'in css-scss vs.  çalışmaları style parçasında yapılır.
* Component'in **app.component.scss** dosyası style kısmıdır.
* **styleUrls** field'ı ile ilişkilendirme gerçekleştirilir.
* styles field'ı kullanılarak css tanımlamaları ts dosyasında gerçekleştirilebilir.

<br>

**Component Class**
* .ts uzantılı ana merkezi dosyadır.
* JavaScript-TypeScript-JQuery işlemleri bu parça da gerçekleştirilir. Değişkenler ile fonksiyonlar component class içerisinde tanımlanır.
* İş mantığı barındıran servisler Component Class üzerinden çağırılar.
* API dış servislere erişimin başlatılması bu sınıfın sorumluluğudur.
<br>

**Selector**
* HTML dosyalarında kullanılırlar.
* Kullanılacak component'in uygulamanın herhangi bir noktasında çağıracak/referans edecek Selector özelliğidir.
<br>

<h3>DATA BINDING</h3>
Component Class yapısı ile HTML yapısınının birbirine bağlanması ve işlemler yürütülmesi.
Değişiklikler 2 taraf içinde dinamik şekilde anlık aktarılacaktır..
<br>
<br>

* **Text Interpolation**
En temel binding yöntemidir.
**{{}}** operatörü ile kullanlır.

<br>

* **Property Binding**
Component Classda tanımlı verilerin property olarak template içerisine bağlnamasını sağlar.

```ts
itemImageUrl = '../assets/image.png';
<img alt="item" [src]="itemImageUrl">
```

<br>

* **Two Way Data Binding**
Template içerisindeki HTML nesnesinde değişiklik olduğunda, bind edilmiş component class member'larının değerleri anlık olarak değişecektir. Tam tersi durumda geçerlidir. Bind işlemini gerçekleştirmek için input nesnelerinde **[(ngModel)]** direktifi kullanılır.
Genellikle form nesnelerinde kullanılır.

```ts
template: `
    <input type = "text" [(ngModel)] = "name">
`
export class MyComponent
{
    name: string;
}
```
<br>

* **Event Binding**
Template içerisindeki nesnenin component class da tanımı olan fonksiyona event olarak bağlanmasıdır.
(event) olarak belirtilebilir 

```ts
template: `
    <button (click) = "butonClick()">Click</button>

    <button on-click = "butonClick()">Click</button>
`
export class MyComponent
{
    butonClick(){};
}
```
<br>

* **Attribute binding**
Html elemanları attribute'larına değerleri component classdan verilmesini sağlar.