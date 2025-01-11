
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

* **DECORATOR**
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
Template içerisindeki HTML nesnesinde değişiklik olduğunda, bind edilmiş component class member'larının değerleri anlık olarak değişecektir. Tam tersi durumda geçerlidir. Bind işlemini gerçekleştirmek için input nesnelerinde <a id="ngModel">**[(ngModel)]**</a>
direktifi kullanılır.
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
<br>

<h4>INTERPOLATION SYNTAX</h4>
Herhangi bir field ya da propert değerininin {{}} operatörü ile html içerisinde bind edilmesidir. 
<br>
Uygulamanın state'ini değiştirebilecek bir işlem gerçekleştirilemez.
State de değişiklik gerçekleştirebilecek operatörler veya keywordler kullanılamaz.
<br>
Örnek operatörler-keywordler: =, ++, +=, ;, new, typeof vs.

<br>
Script, html kodları handle edilmeden en sade haliyle yansıtılırlar.

<br><br>

<h4>DIRECTIVES</h4>
Html elemanlarına ekstra özellik ve davranış eklemeyi sağlar.
Directive selector'u ile bu davranış kazandırılır.<br>
<br>

**Built-in Directives**

* **ngFor Directive**: Html nesneleri üzerinde iterasyonel çalışmalar yapmak için kullanılır.

```html
template: `
<div *ngFor = "let name of names">{{name}}</div>
`
```

```ts
export class MyComponent
{
    names: string[] = ["My1", "My2", "My3"]
}
```
<br>

* **ngIf Directive**: Html nesnelerin görünürlüğünü ayarlamak için kullanılır.
```html
template: `
<div *ngIf="false">Message</div>
`
```
<br>

* **ngSwitch Directive**: Html nesnelerin görünürlüğünü ve içeriğini değiştirmek belirli şartlara göre şekillendirmek için kullanılır. **ngSwitchCase** ile şart kontrolü yapılır. **ngSwtichDefault** ile de şarta uygun bir case yok ise default tetiklenecektir.
```html
template: `
<div [ngSwitch]="3">
    <div *ngSwitchCase="1">Value-1</div>
    <div *ngSwitchCase="2">Value-2</div>
    <div *ngSwitchDefault=>Default Value</div>
</div>
`
```
<br>

* **ngClass Directive**: ngClass ile Html etiketlerinin class değereri dinamik olarak yönetilebilir.

<br>

* **ngStyle Directive**: ngStyle ile Html etiketlerinin style değerlerinin dinamik olarak yönetilmesini sağlar.

<br>

* <a href="#ngModel">**ngModel Directive:**</a> Two data binding de kullanılır.

<br>


<h4>CUSTOM DIRECTIVE</h4>
Custom directive'ler oluşturarak HTML nesnelerine kendi isteğimize,  yapacağımız işlemlere göre berlirli davranışlar kazandırabiliriz. 
<br>
Directive oluşturma talimatı;

```
ng g(generate) d(directive) fileName/directiveName
```

<br>
Directive class'lar @Directive decorator ile işaretlenir.

**Selector** ile directive uygulama seviyesinde kullanabilmeyi sağlayan referanstır. 

<br>
Directive ile işaretlenmiş HTML nesnesi, directive class'ının ctor parametresinde temsil edilip işlemler gerçekleştirilir.

```ts
export class TestDirective {

  constructor(private element:ElementRef) { }

}
```
<br>

Kullanılan directive'e parametre tanımlanarak davranışı yönetilebilir.

<br>

**@HostListener**: oluşturulan directive'in hangi event ile nitelendirileceğini belirtmeyi sağlayan bir decoratordur.

<br>

**@HostBinding**: Directive'in işaretlediği html nesnesinin bir özelliğine bind ederek işlemler gerçekleştirilebilir.

```ts
export class TestDirective {

  constructor() { }

  @HostListener("click")
  onClickk(){alert("click edildi...")}

  @HostBinding("style.color")
  writingcolorr: string = "blue";

}
```

<h4>STRUCTURAL DIRECTIVE</h4>
HTML nesnesini ve DOM yapısını fiziksel/yapısal olarak değişikliğe tabi tutmayı sağlar.

* Davranışlarını setter propertyler ile belirlerler. Setter property adı selector referans adıyla aynı olmak zorundadır.

<br>
2 modül vardır;
<br><br>

* **TemplateRef**: HTML nesnesini manipüle ederek yapısal değişiklik yapılacaksa bu html nesnesi TemplateRef ile refererans edilir.
* **ViewContainerRef**: Container referansı ile template'in içeriği referans edilir. Bu container içerisinde dinamik şekilde html elemanlarını eklemeye çıkarmaya yarar.
Bir component'inde dinamik şekilde yüklenmesini sağlar.

<br>
Oluşturulan directive classında ctor içerisinde templateRef ve viewContainerRef referansları tanımlanır.

```ts
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  ```
<br>

<h4>PIPES</h4>
Verinin html de gösterilirken görüntülenme şeklinde değişiklik için kullanılır.
<br>
<br>

Built-in olarak birçok pipe vardır.

* **Date Pipe**: Tarihsel verilerin biçimlendirilmesini sağlar.
```ts
{{'09.05.1998' | date}}
```
<br>

* **Currency Pipe**: Sayısal değerleri parasal formatta sembol ile göstermeyi sağlar.
```ts
{{999 | currency: '₺'}}
```
<br>

* **Slice Pipe**: Dizilerde verilerin belirli aralıklarda dilimlenmesini/ayrılmasını sağlar.
```ts
{{name | slice: 2:5}}
```
<br>

* **Json Pipe**: Bir nesneyi JSON formatına dönüştürmeyi sağlar.
```ts
{{object | json}}
```
<br>

* **UPPER-lower case Pipe**: Metinsel değelerin tüm harflerini büyük-küçük harflere dönüştürmeyi sağlar.
```ts
{{'deneme123' | uppercase-lowercase}}
```
<br>

* **TitleCase Pipe**: Bir cümlenin her kelimesinin ilk harfini büyütmeyi sağlar.
```ts
{{'test deneme td123' | titlecase}}
```
<br>

* **KeyValue Pipe**: KeyValue formatında koleksiyonu key ve valueleri ile elde etmeyi sağlar.
```ts
<div *ngFor="let c of col | keyvalue">{{c.key}} - {{c.value}}</div>
```

<br>

##### Custom Pipes
Custom pipe oluşturma talimatı;
```
ng g p pipes/pipeName
```
```ts
export class TestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
```

* Custom pipe **PipeTransform interface**'i tarafından implement edilmelidir.
* Implement neticesinde gelen **Transform metodu** ile yapılandırlamalar ihtiyaca göre oluşturulabilir.
* Custom oluşturulan pipe, Component ve Service içerisinde instance olarak kullanılabilmektedir.
<br>


<h4>Component Communication</h4>
Componentler arasında veri ve olaylarda iletişim.
<br><br>

**Parent to Child Communication**
Parent component den child component e veri göndermek için kullanılır. Child Component'de dışarıdan alınacak veri @Input() ile işaretlenir.

**Child to Parent Communication**
Child component den parent component e veri göndermek için kullanılır. Parent'a gönderilecek veri @Output ile işaretlenir ve EventEmitter ile bir event ile veriyi gönderir.