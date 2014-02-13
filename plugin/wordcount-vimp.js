var INFO = xml`
<plugin name="wordcount-vimp.js"
        version="0.1"
        summary="Count selected texts"
        href="http://github.com/naoty/wordcount-vimp"
        xmlns="http://vimperator.org/namespaces/liberator">

        <author email="naoty.k@gmail.com">Naoto Kaneko</author>
        <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
        <project name="Vimperator" minVersion="3.3"/>
        <p>Read current page with zurukko</p>
        <item>
            <tags>:wc</tags>
            <spec>:wc</spec>
            <description>
                <p>Count selected texts</p>
            </description>
        </item>
</plugin>`;

(function () {
    var names = ["wordcount"];
    var desc = "Count selected texts";
    var command = function (args) {
        count = content.window.getSelection().toString().length;
        liberator.echo(count);
    };

    commands.addUserCommand(names, desc, command);
})();
