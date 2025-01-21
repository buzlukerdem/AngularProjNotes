
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

<h3>Angular Ana Yapıtaşları</h3>
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

<h3>DIRECTIVES</h3>
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

<h3>PIPES</h3>
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

#### Custom Pipes
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
* Implement neticesinde gelen **Transform metotu** ile yapılandırlamalar ihtiyaca göre oluşturulabilir.
* Custom oluşturulan pipe, Component ve Service içerisinde instance olarak kullanılabilmektedir.
<br>


<h4>Component Communication</h4>
Componentler arasında veri ve olaylarda iletişim.
<br><br>

**Parent to Child Communication**
Parent component den child component e veri göndermek için kullanılır. Child Component'de dışarıdan alınacak veri @Input() ile işaretlenir.

**Child to Parent Communication**
Child component den parent component e veri göndermek için kullanılır. Parent'a gönderilecek veri @Output ile işaretlenir ve EventEmitter ile bir event ile veriyi gönderir.<br>
<br>

### Component Life Cycle
Angular componentinin ilk oluştuğu andan imha edileceği ana kadar ki süreçte belirli noktalarda çalışacak davranışsal metot lar vardır.
Bu metotlar componentin farklı aşamalarında çalışırlar ve birbirlerinden farklı görevleri yerine getirirler. Bu metotlar kendi interfaceleri tarafından component class'a implement edilerek kullanılabilirler.

* **ngOnChanges**: Component'in input değişkenleri selector referansı üzerinden değişikliliğe uğrarsa OnChanges metotu tetiklenir.

```ts
export class TestingComponent implements OnChanges{
  ngOnChanges(): void {
  console.log("OnChanges triggered...");
  }
}
```
<br>

* **ngOnInit**: Component'in sayfaya ilk kez oluşturulduğu/yüklendiği an tetiklenir.

```ts
export class TestingComponent implements OnInit{
  ngOnInit(): void {
  console.log("ngOnInit triggered...");
  }
}
```

<br>

* **ngDoCheck**: Component'in güncellenmesi durumunda, Component classta veya componentin template'inde görsel değişiklik olduğunda tetiklenir.

```ts
export class TestingComponent implements DoCheck{
  ngDoCheck(): void {
  console.log("ngDoCheck triggered...");
  }
}
```

<br>

* **ngAfterContentInit**: Componentin içeriği ilk kez oluşturulduğunda tetiklenir.

```ts
export class TestingComponent implements AfterContentInit{
  ngAfterContentInit(): void {
  console.log("ngAfterContentInit triggered...");
  }
}
```

<br>

* **ngAfterContentChecked**: Component'in içeriği güncellendiği zaman tetiklenir. DoCheck metotu angAfterContentChecked metotunu da kapsar.

```ts
export class TestingComponent implements AfterContentChecked{
  ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked triggered...");
  }
}
```

<br>

* **ngAfterViewInit**: Component'in view'ı ilk kez oluşturulduğunda tetiklenir.

```ts
export class TestingComponent implements AfterViewInit{
  ngAfterViewInit(): void {
  console.log("ngAfterViewInit triggered...");
  }
}
```

<br>

* **ngAfterViewChecked**: Component'in view'ı her güncellendiğinde/değişiklik olduğunda tetiklenir.

```ts
export class TestingComponent implements AfterViewChecked{
  ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked triggered...");
  }
}
```

<br>

* **ngOnDestroy**: Component'in imha edilmesi/silinmesi durumunda tetiklenir.

```ts
export class TestingComponent implements OnDestroy{
  ngOnDestroy(): void {
  console.log("ngOnDestroy triggered...BYE");
  }
}
```
<br>


<br>

## Angular Forms
Kullanıcılardan veri alabilmek, verisel iletişime girebilmek için kullanılan yapılardır.
2 tür yaklaşım vardır.
<br>

**Template-Driven Form Approach**
Angular form yapısı oluşturmayı sağlar ve form elemanlarını ngModel direcive'i ile işaretleyerek çalışmaktadır.
Formun tasarımı ve yapılandırılması template üzerinden gerçekleştirilir.
Formda tüm davranışlar ve validasyonlar template üzerinden directive'ler ve attribute'lar ile sağlanır.

* **ngForm** directive'i: Formun oluşturulmasını sağlar. Arka planda bir FormGroup nesnesi oluşturur ve temsil eder.
NgForm propertyleri;
**1-value**: FormGroup içerisindeki formcontrol nesnesinin değerini elde etmeyi sağlar.
**2-valid**: Formun geçerli olup olmadığı duruma göre true-false dönderir.
**3-touched**: Form nesnesinin ngModel ile işaretlenmiş elemanlarından birinde değer girilip girilmediğinin sonucunu bool türde döner.
**4-submitted**: Formun submit edilip edilmediği sonucunu bool türde döner.

* **ngModel** directive'i: Form içerisinde kullanılacak olan kontrolleri işaretler. Two Way Databinding davranışını da sergiler.

* **ngModelGroup** directive'i: Birden fazla form kontrülünü gruplandırarak kullanmayı sağlar. Gruplandırılan veri ayrı obje olarak elde edilir.


<br>
<br>

**Model-Driven/Reactive Form Apporach**
Template-driven forma göre daha complex işlemler için uygundur.
Formun temel mantığı component üzerinde bir object olarak tanımlanır ve bu obje ile HTML'deki form etiketlerine bind edilir.
En önemli farkı form elemanları ve bu form elemanlarındaki verilerin değişiklikleri ilgili nesne tarafından reaktif(dinamik) şekilde takip edilmesidir.
Ek olarak formun validasyonel kurallarıyla birlikte yapılandırmalar nesne üzerinden tanımlanabilir.

<br>

* **FormGroup**: Forun kurulmasını sağlar. Form elemanları component class'ında modellenir.

* **FormControlName**: FormGroup nesnesini içerisindeki herhangi bir FormControl'ü form elemanlarından birine bağlamak ve senkronize bir davranış sergilemek için kullanılır. Dinamik şekilde form elemanı değeri değiştiğinde nesnenin de değeri otomatik güncellenecektir.

* **FormGroupName**: ngModelGroup directive'in model-driven-form da karşılığıdır. Form kontrollerini gruplayabilir ve işlevsel olarak yönetmeyi sağlar.

* **ValueChanges**: Formdaki kontrolden birinin değeri değiştiği an tetiklenir.

* **StatusChanges**: Formun geçerlilik durumu değiştiğinde tetiklenir.

<br>

## VALIDATION
* Formdaki veri alanları kullanıcılar tarafından belirtilen kurallara göre girilip, girilmediğinin kontrolü validation ile sağlanır.
* Form bütünsel olarak doğrulanmadığı sürece Valid durumu false olacaktır. Doğrulandığı takdirde true olacaktır.
* ReactiveForm modülünde built-in validators gelmektedir.
**Bunlar**: Min-Max-Required-RequiredTrue-Email-MinMaxLength
* Kullanılırken formcontrollere uygun propertyler oluşturulur. Doğrulama ve hata mesajları oluşturulan propertyler üzerinden gerçekleştirilir.
<br>

<h4>Custom Validator</h4>
Custom validatorlar oluşturulabilmektedir. Oluşturabilmek için ValidatorFn interface'inin imzasına uygun custom validator function oluşturabiliriz.

```ts
export function capitalLetterValidator(control: AbstractControl): ValidationErrors | null{}
```

<br>
<h4>Parametreli Custom Validator</h4>
Parametreli validator oluşturmak için geriye validatorFn türünden nesne döndürülmelidir.

```ts
export function parameterCapitalLetterValidator(count: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {}}
```
<br>
Bu kullanım validation'lar sync olarak davranış göstereceklerdir.

<br><br>
<h4>Async Validator</h4>

**AsyncValidatorFn** interface'i kullanılır ve imza olarak geriye Promise veya Observable türde nesne dönderir.
Bu yapı genellikle doğrulamanın dış servisten alındığı ve süresinin tahmin edilemediği durumlarda kullanılır.

<br>
<h4>Dinamik Olarak Validator Ekleme-Silme</h4>

**SetValidators** ve **setAsyncValidators** metotları ile ekleme işlemi gerçekleştirebilmekteyiz. Bu kullanım ile önceki eklenen validator'lar kaldırılmış olacaktır.

**ClearValidators** metodu ile tüm validasyonları kaldırabiliriz.
<br><br>

## Angular - Dependency Injection
Angular mimarisinde dahili olarak gelmektedir.
Dependency injection aktörleri;
* Consumer: Bağımlı olan sınıftır.
* Dependecy: Bağımlı olunan servistir.
* Injection Token: Bağımlı olunan servis sınıfının referansıdır.
* Provider: Injection Token'ın yerleştirildiği yerdir.
* Injector: Servisleri ihtiyaç noktalarında Injection Token ile inject etmeyi sağlar.

Inject ederken component class'ının constructor metotunda ioc üzerinden servis talep edilir.
```ts
export class AppComponent{
  constructor(private service:Service){}
}
```

Bir servisi provider'a eklemeksizin direkt enject edebiliriz. Bunun için ilgili servisin @Injectable decorator'ü ile işaretlenmesi gerekir ve providedIn özelliğine 'root' değeri verilir. Bu sayede servis uygulamanın herhangi bir noktasından inject edilebilir bir davranış gösterecektir.

```ts
@Injectable({
  providedIn: "root"
})
export class Service{
  //...
}
```
<br>

**Injectable Decorator**
Bir sınıfın servis olacağını belirtmek için @Injectable decorator'ı kullanılır. Servis sınıfının da kendi içerisinde başka bir servis'e bağımlılığı var ise onu provider'a eklemek için kesinlikle @Injectable ile işaretlememiz gerekir. Başka bir servis'e bağımlılığı olsun olmasın bu decorator ile işaretlemede bulunuruz.

<br>

**providedIn Parameter**
* Root: İlgili servisin singleton(tek bir nesne) olarak eklenmesini sağlar.
* Any: İlgili servisin birden fazla nesnesinin üretilebilir olmasını sağlar.
* Platform: platform bağımsız uygulamalar için tasarlnamıştır. 

<br>

**Provide Etme**
Provide edilecek olan servisi temseil edecek ve ihtiyaç durumunda erişip kullanılacak olan DI TOKEN'dır
Bir servisi provide ederken üç tür token türü kullanabiliriz.
* **Type Token**: Herhangi bir servis türü referans'ı token olarak kullanılır. Constructor da inject edilirken provide'da tanımlanan token adıyla erişilir.

```js
providers: [{provide: TestService, useClass: TestService}]
```
<br>

* **String Token**: Provide edilirken metinsel değer ile token belirtilir. Constructor da inject edilirken @Inject decorator'u ile kullanılması gerekir.

```js
providers: [{provide: "TestService", useClass: TestService}]
```
<br>

* **Injection Token**: Aynı isimde metinsel token'larda çakışma olmaması için ayrı bir .ts dosyasında tokenlar oluşturulur. Bunlar benzersiz tokenlar olur.
```js
export const testServiceIT : InjectionToken<any> = new InjectionToken("Desc");
```

```js
providers: [{provide: testServiceIT, useClass: TestService}]
```

<br><br>

## SERVICES
Service yapılanmaları componentlerde ki business logic sorumluluğu için kullanılabilir.
Servislerin üstleneceği iş sorumlulukları componentlerden iş süreçlerini arındırmış olacaktır.

Servis oluşturma yöntemi:
```
ng g s/service services/servicename
```
Oluşturulan servis default injectable decorator'ü ile işaretlenir ve provideIn değeri root olarak atanır.

Servisler componentler arası iletişimi de sağlayabilmektedir.


